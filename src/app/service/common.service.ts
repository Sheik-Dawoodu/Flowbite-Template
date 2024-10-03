import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
// current modal status
private currentModal: any;
public currentModalStatusObservable!: Observable<string>;
  constructor() {
    this.currentModal = new BehaviorSubject(null);
    this.currentModalStatusObservable = this.currentModal.asObservable();
   }


  /**
   * Send modal current Status
   *
   * @param {string} currentStatus
   */
  public sendCurrentModalStatus(currentStatus: string): void {
    this.currentModal.next(currentStatus);
  }
}
