import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingLocationComponent } from '../listing-location/listing-location.component';
import { ListingLocation } from '../listing-location';
import { ListingService } from '../listing.service';


@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ 
    CommonModule,
    ListingLocationComponent
   ],
  template: `
    <section>
      <form class="search">
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-listing-location *ngFor="let listingLocation of listingLocationList"
      [listingLocation]="listingLocation"
      >


      </app-listing-location>
    </section>
  `,
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  listingLocationList: ListingLocation[] = [];

  listingService: ListingService = inject(ListingService);
  
  constructor() {
    this.listingLocationList = this.listingService.getAllListingLocations();
  }
};
