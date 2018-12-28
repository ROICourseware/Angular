import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';


  demo: any = {
    myDate: new Date(),
    lowerCaseText: "i was originally in lowercase",
    upperCaseText: "I WAS ORIGINALLY IN UPPERCASE",
    mixedCaseText: "I was originally in  Mixed Case",
    myNumber: 0.427,
    myLargeNumber: 365
}



}
