import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-help-popup',
  imports: [],
  templateUrl: './help-popup.html',
  styleUrl: './help-popup.css'
})
export class HelpPopup {
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
