import { Component } from '@angular/core';

@Component({
    selector: 'no-entry',
    template: `<h1>I thought you weren't allowed in here?<br>
                <a [routerLink]="['/countries', {outlets: {'countries': ['list'], 'country': ['form']}}]"> Go away </a></h1>
`
})
export class NoEntryComponent  {

}