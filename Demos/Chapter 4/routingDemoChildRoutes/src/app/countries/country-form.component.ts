import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {



  country: any= {name: "", language: "English", countryId: -1 } ;
    
 
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.country);
}

}
