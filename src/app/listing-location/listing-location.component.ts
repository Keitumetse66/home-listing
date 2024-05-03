import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingLocation } from '../listing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listing-location',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="listingLocation.photo" 
      alt="Exterior photo of {{listingLocation.name}}">
      <h2 class="listing-heading">{{ listingLocation.name }}</h2>
      <p class="listing-location">{{ listingLocation.city }}, {{ listingLocation.province }}</p><a class="listing-btn" [routerLink]="['/details', listingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './listing-location.component.css'
})
export class ListingLocationComponent {
  @Input() listingLocation!: ListingLocation;
}
