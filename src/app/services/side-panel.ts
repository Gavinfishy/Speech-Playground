import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidePanelService {
  private _toggleHelp$ = new BehaviorSubject<void>(undefined);
  private _navigateToPage$ = new BehaviorSubject<string | null>(null);

  toggleHelp$ = this._toggleHelp$.asObservable();
  navigateToPage$ = this._navigateToPage$.asObservable();

  triggerToggleHelp(): void {
    this._toggleHelp$.next();
  }

  triggerNavigateTo(page: string): void {
    this._navigateToPage$.next(page);
  }
}
