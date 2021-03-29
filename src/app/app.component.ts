// like importing React
import { Component } from '@angular/core';

@Component({
  // creating a component with CLI autofills selector etc
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Sean';

  // constructor() {
  //   console.log(123);
  //   this.changeName('Mark');
  // }

  // changeName(name: string): void {
  //   this.name = name;
  // }
}
