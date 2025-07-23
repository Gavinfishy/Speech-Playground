import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { SidePanel } from "./side-panel/side-panel";
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SidePanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = '';

  constructor (private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    mergeMap(route => route.data)).subscribe(data => {
      this.title = data['title'] || 'Default';
      this.titleService.setTitle(this.title);

      const icon = data['icon'] || 'color-wheel.png';
      this.updateFavicon(icon);
    });
  }

  updateFavicon(iconUrl: string) {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

}
