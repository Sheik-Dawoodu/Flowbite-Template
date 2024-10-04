import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ModalComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'flowbite-template';

  ngOnInit(): void {
    initFlowbite();
  }
}
