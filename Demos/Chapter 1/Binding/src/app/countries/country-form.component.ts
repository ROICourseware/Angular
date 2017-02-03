import { Component, Input } from '@angular/core';

@Component({
    selector: 'country-form',
    template: `Country:
                    <input  type="text" 
                    required name="name" #name="ngModel" 
                    [(ngModel)]="country.name" />  
                <button [disabled]="!name.valid" (click)="submit()">
                    {{ actionName }}  Country
                </button>`
})
export class CountryFormComponent  {   
    actionName: string = "Add";
    country: any= {name: "", language: "", countryId: -1 } ;
    submit() {
        console.log(this.country);
    }
}