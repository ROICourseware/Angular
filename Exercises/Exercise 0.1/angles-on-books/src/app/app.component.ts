import { Component } from '@angular/core';
import { Book } from './models/book';
import { routeChange } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeChange
  ]
})
export class AppComponent {
  title = 'Angles On Books';
 
  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
