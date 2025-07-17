import { Routes } from '@angular/router';
import { VoiceColor } from './voice-color/voice-color';
import { PageTwo } from './transcribe/transcribe';

export const routes: Routes = [
    { path: '', component: VoiceColor },
    { path: 'transcribe', component: PageTwo }
];
