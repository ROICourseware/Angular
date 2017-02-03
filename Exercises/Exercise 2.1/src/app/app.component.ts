import { Component } from '@angular/core';
import '../../public/css/styles.css';
import '../../public/css/bootstrap.min.css';
@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Angles On Books'; 
}
