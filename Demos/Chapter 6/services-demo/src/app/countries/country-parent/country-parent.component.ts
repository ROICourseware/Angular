import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-parent',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './country-parent.component.html',
  styleUrl: './country-parent.component.css'
})
export class CountryParentComponent {

}
