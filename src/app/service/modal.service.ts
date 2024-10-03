import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Modal Service
 */
export class ModalService {

  private modals: any[] = [];

  /**
   * Add modal. Modals must be unique by ID. If a duplicate modal is added, the previous modal with a matching ID will
   * be removed.
   * @param {any} modal
   */
  public add(modal: any): void {
    // add modal to array of active modals
    // if (this.contains(modal))
    // this.remove(modal.id); // In cases where multiple download modals are implemented, the second one is preferred to keep for functionality.
    this.modals.push(modal);
  }

  /**
   * Check if the specified modal exists in the service. Can be used on a modal object containing an id field,
   * or a string containing the ID to look for.
   * @param {any}modal Modal object containing id field or modal ID string.
   * @return{boolean}
   */
  public contains(modal: any): boolean {
    return this.modals.filter((x) => (x.id === (modal.id ? modal.id : modal))).length > 0;
  }

  /**
   * remove modal
   *
   * @param {string} id
   */
  public remove(id: string): void {
    // remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  /**
   * open model based on id
   * @param {string} id
   */
  public open(id: string): void {
    // open modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }

  /**
   * close model based on id
   * @param {string} id
   */
  public close(id: string): void {
    // close modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}
