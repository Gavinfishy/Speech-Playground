import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { SidePanel } from "./side-panel/side-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SidePanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
