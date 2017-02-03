import { Component } from '@angular/core';

@Component({
    selector: 'country-parent',
    template: `<div class="row">
                    <router-outlet name="countries"></router-outlet>
                </div>
                <div class="row">
                    <router-outlet name="country"></router-outlet>
               </div>`
})
export class CountryParentComponent  {
  

}