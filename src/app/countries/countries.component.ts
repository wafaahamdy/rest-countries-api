import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../countries.service"

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countriesList ;
  err = "" ;
  filter =  "" ;
  region = "" ;
  mode=true;  //true =day , false = night

  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll()
    .subscribe (res=>this.countriesList = res ,
      err=> this.err=err) ;
    
  }

  toggleTheme(){
    this.mode =!this.mode ;
    if(!this.mode) //dark mode
      document.documentElement.classList.add("dark");
    else
    document.documentElement.classList.remove("dark");
  }
 

}
