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
  isListening: boolean = false;
  showingHelp: boolean = false;

  private continuousRecognitionAbort?: () => void;

  constructor(
    private speechService: SpeechRecognitionService,
    private router: Router
  ) {}

  goToPage2(): void {
    this.router.navigate(['/page2'])
  }

  ngAfterViewInit(): void {}

  displayHints(): void {}

  // Will stop recording after one word regardless of if it was recognized
  // startRecognition(): void {
  //   this.speechService.listenOnce().subscribe({
  //     next: ({ transcript }) => {
  //       this.decodeSpeech(transcript.toLowerCase());
  //     },
  //     error: (err: string) => {
  //       this.diagnostic.nativeElement.textContent = 'Speech error: ' + err;
  //     }
  //   });
  // }

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
        this.decodeSpeech(transcript.toLowerCase());
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
    console.log(transcript)
    const command = this.commands.find(command => transcript.includes(command));
    if (command) {
      transcript = transcript.replace(command, '');
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
        console.log(transcript);
        this.goToPage2();
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
