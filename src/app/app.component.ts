import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListingComponent,
    RouterModule
  ],
  // templateUrl: './app.component.html',
  template: `
  
  <main>
    <a [routerLink]="['/']"></a>
    <header class="brand-name">
      <img class="brand-logo" src="./assets/logo.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    <footer class="footer">
    <img class="brand-logo" src="./assets/logo.png" alt="logo" aria-hidden="true">
  
    </footer>
  </main>
  
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listings';
}
