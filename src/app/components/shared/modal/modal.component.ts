import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { MODAL_CLOSE, MODAL_OPEN } from '../../../constants/application.const';
import { CommonService } from '../../../service/common.service';
import { ModalService } from '../../../service/modal.service';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

/**
 * Reusable Modal Component
 */
export class ModalComponent {
  @Input() id!: string;
  @Input() heightClass!: string;
  @Input() widthClass!: string;

  private element: any;

  /**
   * @constructor
   */
  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private commonService: CommonService,
  ) {
    this.element = this.el.nativeElement;
  }

  /**
   * called initially
   */
  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  /**
   * called when component destroys
   */
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
    document.body.classList.remove('jw-modal-open');
  }

  /**
   * open model
   */
  public open(): void {
    this.element.style.display = 'block';
    this.commonService.sendCurrentModalStatus(MODAL_OPEN);
    document.body.classList.add('jw-modal-open');
  }

  /**
   * close model
   */
  public close(): void {
    this.element.style.display = 'none';
    this.commonService.sendCurrentModalStatus(MODAL_CLOSE);
    document.body.classList.remove('jw-modal-open');
  }
}
