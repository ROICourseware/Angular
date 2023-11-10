import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-pipes',
  templateUrl: './standard-pipes.component.html',
  styleUrls: ['./standard-pipes.component.css']
})
export class StandardPipesComponent {

  public demo: any = {
    myDate: new Date(),
    lowerCaseText: 'i was originally in lowercase',
    upperCaseText: 'I WAS ORIGINALLY IN UPPERCASE',
    mixedCaseText: 'I was originally in  Mixed Case',
    myNumber: 0.427,
    myLargeNumber: 365
  };


}
