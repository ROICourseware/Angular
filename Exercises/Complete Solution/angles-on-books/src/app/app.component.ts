import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { routeChange } from './shared/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
