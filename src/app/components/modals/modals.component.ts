import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ModalService } from '../../service/modal.service';
import { ModalComponent } from "../shared/modal/modal.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [SidebarComponent, ModalComponent, NavbarComponent],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent implements OnInit{

  constructor(private modalService:ModalService){}

  ngOnInit(): void {
    initFlowbite()
  }

  /**
   * Closes modal
   */
  closeModal(){
    this.modalService.close('example-model')
  }

  /**
   * Opens modal
   */
  openModal(){
    this.modalService.open('example-model')
  }

}
