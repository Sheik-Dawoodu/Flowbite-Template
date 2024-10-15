import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { watchAccount } from '@wagmi/core';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { firstValueFrom, interval, Observable, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HeaderComponent implements OnInit {
  public supportedChains: any = environment.SUPPORTED_CHAINS;


  ngOnInit(): void {
    this.wagmiConfiguration()
  }

  public wagmiConfiguration() {
    const chains = this.supportedChains;
    const projectId = environment.PROJECT_ID;

    // Create a metadata object
    const metadata = {
      name: "wagmi",
      description: "wagmi",
      url: environment.APP_URL,
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }

    const config = defaultWagmiConfig({chains,projectId, metadata })

    const modal = createWeb3Modal({
      wagmiConfig: config,
      projectId,
      themeMode: 'light',
      enableAnalytics: true, 
      themeVariables: {
        '--w3m-accent': '#0000FF'
      }
    })
    watchAccount(async (account)=>{
      const wagmiStore$ =interval (10).pipe(
        takeUntil(
          new Observable(observer=>{
            const wagmistore = JSON.parse(localStorage.getItem('wagmi.store') || '{}')
            if (wagmistore.store?.data?.account === account.address) {
              observer.next();              
              observer.complete();
            }
          })
        )
      )
      await firstValueFrom(wagmiStore$, {defaultValue : null})
    })
  }

  
}