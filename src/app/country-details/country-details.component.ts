import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {CountriesService} from '../countries.service'
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
name ;
country ; 
err="";
  constructor(private route: ActivatedRoute, private countriesService : CountriesService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name').trim() ;

      this.countriesService.getOne(this.name).subscribe(
        res=>this.country =res,
        err=> this.err = err.message )  

    })
    
 

     
  }

}
