import { Component } from '@angular/core';
import { routeChange } from './common/animations';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    animations: [routeChange()],
    host: { '[@routeChange]': '' }
})
export class AboutComponent {}