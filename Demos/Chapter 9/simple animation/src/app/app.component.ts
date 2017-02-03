import Book from './models/Book.model';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';


@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <div class="container-fluid">
                  <router-outlet></router-outlet>
             </div>`,
    styles: ['.active { font-weight: bold; border: 1px solid black }']
})
export class AppComponent  { 
  name = 'Angles On Books';
 }


