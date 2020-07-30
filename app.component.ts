import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textentered: String = '';

  clicked = (txt) => {
    this.textentered = txt;
  }
}  
