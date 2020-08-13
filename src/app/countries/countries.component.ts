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


  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll()
    .subscribe (res=>this.countriesList = res ,
      err=> this.err=err.message) ;
    
  }

 

}
