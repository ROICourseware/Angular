import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeChange } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routeChange ]
})
export class AppComponent {
  title = 'Angles On Books';

  prepareRouteAnimation(outlet: RouterOutlet): void {
    return outlet &&
     outlet.activatedRouteData &&
     outlet.activatedRouteData['animation'];
}


}
