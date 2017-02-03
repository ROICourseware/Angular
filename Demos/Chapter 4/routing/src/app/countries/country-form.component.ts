import { Component, Input } from '@angular/core';

@Component({
    selector: 'country-form',
    template: `<label class="control-label">Country:
                    <input class="form-control" required minlength="5" type="text" name="content" #content="ngModel" [(ngModel)]="country.content" />
                </label>
                 <button class="btn btn-primary" type="submit">Add Country</button>`
})
export class CountryFormComponent  {
   
    country: any= {name: "", language: "English", countryId: -1 } ;
    
    submit() {
        console.log(this.country);
    }

}