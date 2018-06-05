//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular'
  }
}
