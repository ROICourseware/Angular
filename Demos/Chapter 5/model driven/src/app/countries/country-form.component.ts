import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'country-form',
    template: `<form class="form-group form-inline col-sm-offset-1"
                     novalidate [formGroup]=countryForm (ngSubmit)="submit()">
                 <label class="control-label">Country:
                    <input class="form-control" type="text" formControlName="name"  />
                </label>
                 <label class="control-label">Language:
                    <input class="form-control" type="text" formControlName="language" />
                </label>    
                 <button class="btn btn-primary" [disabled]="!countryForm.valid" type="submit">Add Country</button>
                    <div *ngIf="!(countryForm.controls.name.valid || countryForm.controls.name.pristine)">
                        <div *ngIf="countryForm.controls.name.hasError('required')" class="alert alert-danger">
                            Country must have a name
                        </div>
                        <div *ngIf="countryForm.controls.name.hasError('evilCountry')" class="alert alert-danger">
                            Country cannot be evil
                        </div>                        
                        <div *ngIf="countryForm.get('name').hasError('minlength')" class="alert alert-danger">
                            Country must be at least 2 characters long
                        </div>  
                    </div>  
                    <div *ngIf="!(countryForm.controls.language.valid || countryForm.controls.language.pristine) && countryForm.controls.language.errors.required" class="alert alert-danger">
                        Country must have a language
                    </div>                        
               </form>`
})
export class CountryFormComponent {

    countryForm: FormGroup;
    country: any = { name: "", language: "", countryId: -1 };

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        //without form builder
        this.countryForm = new FormGroup({
            name: new FormControl('', [Validators.minLength(2), Validators.required, this.validateNotEvilCountry]),
            language: new FormControl('', Validators.required),
        });
        //with form builder
        //     this.countryForm = this.formBuilder.group({
        //         name:  ["", Validators.compose([Validators.required, Validators.minLength(2), this.validateNotEvilCountry)],
        //         language: ["", Validators.required]
        //     });
    }

    validateNotEvilCountry(c: FormControl) {
        return c.value !== "Mordor" ? null : { evilCountry : { valid: false } } 
    }


    submit() {
        this.country.name = this.countryForm.get('name').value;
        this.country.language = this.countryForm.get('language').value;
        console.log(this.country);
    }

}