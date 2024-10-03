import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private darkModeEnabled: boolean = false;

  constructor() {
    this.darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    localStorage.setItem('dark-mode', String(this.darkModeEnabled));
    this.updateBodyClass();
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }

  private updateBodyClass(): void {
    if (this.darkModeEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

}
