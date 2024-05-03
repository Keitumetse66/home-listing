import { Injectable } from '@angular/core';
import { ListingLocation } from './listing-location';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
  listingLocationList: ListingLocation[] = [
    {
      id: 0,
      name: 'Maboneng Precints',
      city: 'Johannesburg',
      province: 'GP',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'AFCHO Housing',
      city: 'Durban',
      province: 'KZN',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Hommi',
      city: 'Bloemfontein',
      province: 'FS',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Hamilton Heights',
      city: 'Arcadia, Pretoria',
      province: 'GP',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Aurora Anneks',
      city: 'Woodstock',
      province: 'WC',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'LiveEasy Apartment Group',
      city: 'Kroonstad',
      province: 'FS',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Woodstock',
      province: 'CPT',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Johannesburg',
      province: 'GP',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Pretoria',
      province: 'GP',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Pretoria',
      province: 'GP',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  getAllListingLocations(): ListingLocation [] {
    return this.listingLocationList;

  }

  getListingLocationById(id: number) : ListingLocation | undefined {
    return this.listingLocationList.find(
      listingLocation => listingLocation.id === id);
  }

  constructor() { }
}
