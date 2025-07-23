import { Routes } from '@angular/router';
import { VoiceColor } from './voice-color/voice-color';
import { Transcribe } from './transcribe/transcribe';

export const routes: Routes = [
    { 
        path: '', 
        component: VoiceColor, 
        data: { 
            title: 'Speech to Color',
            icon: 'color-wheel.png',
            headerTitle: 'Speech Color Changer',
        } 
    },
    { 
        path: 'transcribe', 
        component: Transcribe, 
        data: {
            title: 'Speech to Text',
            icon: 'comment.png',
            headerTitle: 'Speech Form Filler',
        } 
    },
];
