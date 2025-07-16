import { Routes } from '@angular/router';
import { VoiceColor } from './voice-color/voice-color';
import { PageTwo } from './page-two/page-two';

export const routes: Routes = [
    { path: '', component: VoiceColor },
    { path: 'page2', component: PageTwo }
];
