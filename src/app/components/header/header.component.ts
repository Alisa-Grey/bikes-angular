import { Component, inject } from '@angular/core';
import { NetworkDetailsService } from 'src/app/services/network-details.service';
import { HeartIconComponent } from '../heart-icon/heart-icon.component';
import { FavouriteStationsService } from 'src/app/services/favourite-stations.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeartIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  networkDetailsService = inject(NetworkDetailsService);
  favouriteStationsService = inject(FavouriteStationsService);

  toggleFavouriteSection() {
    this.favouriteStationsService.toggleFavouritesVisibility();
  }

  ngOnInit() {
    this.favouriteStationsService.getFavouriteStations();
  }
}
