import { Component } from '@angular/core';
import '../../public/css/styles.css';
import '../../public/css/bootstrap.min.css';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Angular'; 
}
