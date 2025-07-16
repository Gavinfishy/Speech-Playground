import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { VoiceColor } from "./voice-color/voice-color";
import { SidePanel } from "./side-panel/side-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, VoiceColor, SidePanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'VoiceColor';
}
