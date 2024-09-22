import { Route } from "@angular/router";
import { CountryParentComponent } from "./country-parent/country-parent.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryComponent } from "./country/country.component";
import { NoEntryComponent } from "./no-entry/no-entry.component";
import { countriesGuard } from './countries.guard';

export const COUNTRY_ROUTES: Route[] =  [
    {
        path: 'countries',
        component: CountryParentComponent,
        children: [
          {
            path: '',
            component: CountryListComponent
          },
          {
            path: ':id',
            component: CountryComponent
          }
        ]
      },
      {
        path: 'noentry',
        component: NoEntryComponent,
        canActivate: [countriesGuard]
      }
    ];