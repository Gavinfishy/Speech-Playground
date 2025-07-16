import { Injectable, NgZone } from '@angular/core';
import { KEYWORDS } from '../keyword-list';

interface SpeechGrammar {
  src: string;
  weight: number;
}

interface SpeechGrammarList {
  addFromString(string: string, weight?: number): void;
  addFromURI(string: string, weight?: number): void;
  [index: number]: SpeechGrammar;
  length: number;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

interface SpeechRecognition extends EventTarget {
  grammars: SpeechGrammarList;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

declare var webkitSpeechRecognition: {
  new (): SpeechRecognition;
};

declare var webkitSpeechGrammarList: {
  new (): SpeechGrammarList;
};

declare var webkitSpeechRecognitionEvent: {
  prototype: SpeechRecognitionEvent;
  new (): SpeechRecognitionEvent;
};

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  private recognition: SpeechRecognition;

  constructor(private zone: NgZone) {
    const SpeechRecognition = (window as any).SpeechRecognition || webkitSpeechRecognition;
    const SpeechGrammarList = (window as any).SpeechGrammarList || webkitSpeechGrammarList;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    if (SpeechGrammarList) {
      const grammarList = new SpeechGrammarList();
      const colors = this.getColorGrammar();
      grammarList.addFromString(colors, 1);
      this.recognition.grammars = grammarList;
    }
  }

  private getColorGrammar(): string {
    return '#JSGF V1.0; grammar colors; public <color> = ' + KEYWORDS.COLORS.join(' | ') + ' ;';
  }

  listenContinuously(
    onResult: (transcript: string, confidence: number) => void,
    onError?: (error: string) => void
  ): () => void {
    this.recognition.continuous = true;

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      this.zone.run(() => {
        const lastResultIndex = event.resultIndex;
        const transcript = event.results[lastResultIndex][0].transcript.toLowerCase();
        const confidence = event.results[lastResultIndex][0].confidence;
        onResult(transcript, confidence);
      });
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      this.zone.run(() => {
        if (onError) onError(event.error);
      });
    };

    this.recognition.onnomatch = () => {
      this.zone.run(() => {
        if (onError) onError('No match');
      });
    };

    this.recognition.start();

    // Return a cleanup function that stops the recognition
    return () => {
      this.recognition.stop();
    };
  }

}
