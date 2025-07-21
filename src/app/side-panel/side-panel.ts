import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidePanelService } from '../services/side-panel';
import { HelpPopup } from "../help-popup/help-popup";
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  imports: [HelpPopup],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css'
})
export class SidePanel implements OnInit, OnDestroy {
  expanded = false;
  showingHelp: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private sidePanelService: SidePanelService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sidePanelService.toggleHelp$.subscribe(() => {
        this.toggleHelpPopup();
      }),
      this.sidePanelService.navigateToPage$.subscribe((page) => {
        if (page) {
          this.navigatePages(page);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  navigatePages(pageName: string): void {
    if (pageName === 'transcribe') {
      this.router.navigate(['/transcribe'])
    } else if (pageName === 'home') {
      this.router.navigate(['/'])
    }
  }
  

  togglePanel() {
    this.expanded = !this.expanded;
  }

  toggleHelpPopup(): void {
    this.showingHelp = !this.showingHelp;
  }
}
