import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidePanelService {
  private _toggleHelp$ = new Subject<void>();
  private _navigateToPage$ = new Subject<string>();

  toggleHelp$ = this._toggleHelp$.asObservable();
  navigateToPage$ = this._navigateToPage$.asObservable();

  triggerToggleHelp(): void {
    this._toggleHelp$.next();
  }

  triggerNavigateTo(page: string): void {
    this._navigateToPage$.next(page);
  }
}
