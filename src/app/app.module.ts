import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
