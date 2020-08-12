import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get("https://restcountries.eu/rest/v2/all") ;
  }
}
