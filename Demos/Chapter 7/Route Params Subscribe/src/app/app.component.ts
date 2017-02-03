import Book from './models/Book.model';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';


@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <div class="row navbar navbar-default">
                 <ul class="nav navbar-nav">
                    <li>
                      <a  routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">home</a>
                    </li>
                    <li>
                      <a  routerLink="/about" routerLinkActive="active">about</a>
                    </li>
                    <li>
                      <a  [routerLink]="['/countries', {outlets: {'countries': ['list'], 'country': ['1']}}]" >countries</a>
                    </li>
                 </ul>
             </div>
             <div class="container-fluid">
                  <router-outlet></router-outlet>
             </div>`,
    styles: ['.active { font-weight: bold; border: 1px solid black }']
})
export class AppComponent  { 
  name = 'Angles On Books';
 }


