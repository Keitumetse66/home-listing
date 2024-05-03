import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { ListingLocation } from '../listing-location';
import { ListingLocationComponent } from '../listing-location/listing-location.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <article>
      <img class="listing-photo" [src]="listingLocation?.photo" alt="Exterior photo of {{listingLocation?.name}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{ listingLocation?.name}}</h2>
        <p class="listing-location">{{ listingLocation?.city}}, {{listingLocation?.province}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units Available: 
            {{listingLocation?.availableUnits }}
          </li>
          <li>Wifi Included: 
            {{listingLocation?.wifi }}
          </li>
          <li>Laundry Available: 
            {{listingLocation?.laundry }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listingService = inject(ListingService);
  listingLocation: ListingLocation | undefined;


  constructor() {
    const listingLocationId = 
    Number(this.route.snapshot.params['id']);
    this.listingLocation = 
    this.listingService.getListingLocationById(listingLocationId);

  }

}
