import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-api';
  mode=true;  //true =day , false = night

  
  toggleTheme(){
    this.mode =!this.mode ;
    if(!this.mode) //dark mode
      document.documentElement.classList.add("dark");
    else
    document.documentElement.classList.remove("dark");
  }
}
