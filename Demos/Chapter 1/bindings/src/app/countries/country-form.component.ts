import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  actionName: string = "Add";
  country: any = { name: "England" };

  submit() {
    console.log(this.country);
  }

}
