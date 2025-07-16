import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SpeechRecognitionService } from '../services/speech-recognition.service';
import { KEYWORDS } from '../keyword-list';
import { HelpPopup } from '../help-popup/help-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice-color',
  imports: [HelpPopup],
  templateUrl: './voice-color.html',
  styleUrl: './voice-color.css'
})
export class VoiceColor implements AfterViewInit{
  @ViewChild('diagnostic') diagnostic!: ElementRef<HTMLDivElement>;

  colors: string[] = KEYWORDS.COLORS;
  commands: string[] = KEYWORDS.COMMANDS;
  pages: string[] = KEYWORDS.PAGES;
  isListening: boolean = false;
  showingHelp: boolean = false;

  private continuousRecognitionAbort?: () => void;

  constructor(
    private speechService: SpeechRecognitionService,
    private router: Router
  ) {}

  navigatePages(pageName: string): void {
    if (pageName === 'transcribe') {
      this.router.navigate(['/transcribe'])
    } else if (pageName === 'home') {
      this.router.navigate(['/'])
    }
  }

  ngAfterViewInit(): void {}

  displayHints(): void {}

  // Will continue listening until stopped
  toggleContinuousRecognition(): void {
    if (this.isListening) {
      this.isListening = false;
      this.continuousRecognitionAbort?.();
      this.diagnostic.nativeElement.textContent = 'Stopped listening.';
    } else {
      this.isListening = true;
      this.diagnostic.nativeElement.textContent = 'Listening...';

      this.continuousRecognitionAbort = this.speechService.listenContinuously((transcript) => {
        this.decodeSpeech(transcript.toLowerCase().trim());
      }, (err) => {
        this.diagnostic.nativeElement.textContent = 'Speech error: ' + err;
      });
    }
  }

  // Simply just resets to deafult (white for now)
  resetColor(): void {
    document.documentElement.style.backgroundColor = 'white';
    this.diagnostic.nativeElement.textContent = 'Reset to white';
  }

  // Changes color based on command
  setColorFromSpeech(transcript: string): void {
    document.documentElement.style.backgroundColor = transcript;
    this.diagnostic.nativeElement.textContent = 'Changed to: ' + transcript;
  }

  // Accepts web captured speech input
  decodeSpeech(transcript: string): void {
    const command = this.commands.find(command => transcript.includes(command));
    if (command) {
      transcript = transcript.replace(command, '').trim();
    }
    
    switch (command) {
      case 'close':
        if (this.showingHelp) {
          this.toggleHelpPopup();
        }
        break;

      case 'color': 
        const foundColor = this.colors.find(color => transcript.includes(color));
        if (foundColor) {
          this.setColorFromSpeech(foundColor);
        } else {
          this.diagnostic.nativeElement.textContent = 'Color not recognized: ' + transcript;
        }
        break;
      
      case 'help':
        this.toggleHelpPopup();
        break;

      case 'navigate':
        const foundPage = this.pages.find(page => transcript.includes(page));
        if (foundPage) {
          this.navigatePages(foundPage);
        }
        else {
          this.diagnostic.nativeElement.textContent = 'Page not recognized: ' + transcript;
        }
        break;
      
      case 'reset':
        this.resetColor();
        break;

      case 'stop':
        this.toggleContinuousRecognition();
        break;

      default:
        this.diagnostic.nativeElement.textContent = 'Command not recognized: ' + transcript;
    }
  }

  toggleHelpPopup(): void {
    if (this.showingHelp) {
      this.showingHelp = false;
    }
    else {
      this.showingHelp = true;
    }
  }
}
