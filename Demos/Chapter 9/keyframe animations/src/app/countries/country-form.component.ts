import { Component, Input, EventEmitter, Output } from '@angular/core';

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
    @Output() countryAdded: any = new EventEmitter();
    actionName: string = "Add";
    country: any= {name: "", language: "", countryId: -1 } ;
    submit() {
        this.countryAdded.emit(this.country);
//        console.log(this.country);
    }
}