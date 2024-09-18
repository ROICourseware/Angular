import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actionName = 'Add';
  country: any = { name: 'England' };
  countries: any[] = [{ name: 'Wales' }];

  submit(): void {
    this.countries.push( { name: this.country.name });
  }

}
