import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
