import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actionName = 'Add';
  country: any = { name: 'England' };
  countries: any[] = [{ name: 'Wales' }];

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.countries.push( { name: this.country.name });
  }
}
