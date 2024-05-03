import { Routes } from "@angular/router";
import { ListingComponent } from "./listing/listing.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: ListingComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    }
];

export default routeConfig;