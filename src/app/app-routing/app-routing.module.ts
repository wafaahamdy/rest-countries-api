import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { CountryDetailsComponent } from '../country-details/country-details.component'
    import { CountriesComponent} from '../countries/countries.component'

    const routes: Routes = [
        { path: ':name', component: CountryDetailsComponent },
        { path: '', component:  CountriesComponent},
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
export class AppRoutingModule { }
