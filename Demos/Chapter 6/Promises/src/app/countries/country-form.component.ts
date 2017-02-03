import { Component, Input } from '@angular/core';
import { CountryService } from './country.service';

@Component({
    selector: 'country-form',
    template: `<form class="form-group form-inline col-sm-offset-1"
                     novalidate #countryForm="ngForm" (ngSubmit)="submit()">
                 <label class="control-label">Country:
                    <input class="form-control" type="text" 
                    required minlength="2" name="name" #name="ngModel" [(ngModel)]="country.name" />
                </label>
                 <label class="control-label">Language:
                    <input class="form-control" type="text" 
                    required name="language" #language="ngModel" [(ngModel)]="country.language" />
                </label>    
                    <div *ngIf="!(name.valid || name.pristine)">
                        <div *ngIf="name.errors.required" class="alert alert-danger">
                            Country must have a name
                        </div>
                        <div *ngIf="name.errors.minlength" class="alert alert-danger">
                            Country must be at least 2 characters long
                        </div>  
                    </div>  
                    <div *ngIf="!(language.valid || language.pristine) && language.errors.required" class="alert alert-danger">
                        Country must have a language
                    </div>                        
                 <button class="btn btn-primary" [disabled]="!countryForm.valid" type="submit">Add Country</button>
               </form>`
})
export class CountryFormComponent  {
   
    constructor(private countryService: CountryService) {}

    country: any= {name: "", language: "", countryId: -1 } ;
    
    submit() {
        this.countryService.addCountry(this.country);
    }

}