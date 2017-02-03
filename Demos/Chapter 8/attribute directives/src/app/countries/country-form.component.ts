import { Component, Input } from '@angular/core';

@Component({
    selector: 'country-form',
    template: `<form class="form-group form-inline col-sm-offset-1"
                     novalidate #countryForm="ngForm" (ngSubmit)="submit()">
                 <label class="control-label">Country:
                    <input class="form-control" type="text" 
                    required name="name" #name="ngModel" [(ngModel)]="country.name" />
                </label>
                 <label class="control-label">Language:
                    <input class="form-control" type="text" 
                    required name="language" #language="ngModel" [(ngModel)]="country.language" />
                </label>    
                <button class="btn btn-primary" [disabled]="!countryForm.valid" type="submit">Add Country</button>
                <div *abIfNot="(name.valid || name.pristine)" class="alert alert-danger">
                      Country must have a name
                </div>  
                <div *ngIf="!(language.valid || language.pristine)" class="alert alert-danger">
                      Country must have a language
                </div>                        
               </form>`
})
export class CountryFormComponent  {
   
    country: any= {name: "", language: "", countryId: -1 } ;
    
    submit() {
        console.log(this.country);
    }

}