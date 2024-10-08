import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { watchAccount } from '@wagmi/core';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { interval, Observable, takeUntil } from 'rxjs';
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
    watchAccount(async (account) => {      
      // Create an observable that emits at a 10ms interval until the wagmi store is updated
      const wagmiStore$ = interval(10).pipe(
        takeUntil(
          new Observable(observer => {            
            // Check if the wagmi store has the user's account address
            const wagmiStore = localStorage.getItem('wagmi.store');   
            console.log('wagmiStore',wagmiStore);
                     
            if (wagmiStore && JSON.parse(wagmiStore).state.data.account === account.address) {
              observer.next();
              observer.complete();
            }
          })
        )
      );
      // // Wait for the first value from the observable, or null if it completes without emitting
      // await firstValueFrom(wagmiStore$, { defaultValue: null });
      // // Get the wagmi store from local storage and parse it as JSON
      // const wagmiStore: any = localStorage.getItem('wagmi.store');
      // const wagmiAccount = JSON.parse(wagmiStore);
      // // Update the connector info with the user's account address
      // this.connectorInfo = wagmiAccount?.state?.data?.account;
      // if (!this.connectorInfo) {
      //   this.localStorageService.removeToken();
      // }
      // // // Update the wallet address in the dashboard service
      // this.authService.updateWalletAddress(this.connectorInfo);
    });
  }

  
}