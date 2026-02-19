import { Component, inject, Input } from '@angular/core';
import { INetwork } from 'src/app/services/api/interfaces/networks.interface';
import { NetworkDetailsService } from 'src/app/services/network-details.service';
import { FavouriteStationsService } from 'src/app/services/favourite-stations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-network-card',
  standalone: true,
  templateUrl: './network-card.component.html',
  styleUrls: ['./network-card.component.scss'],
})
export class NetworkCardComponent {
  @Input() network: INetwork = {} as INetwork;
  networkDetailsService = inject(NetworkDetailsService);
  favouriteStationsService = inject(FavouriteStationsService);
  networkDetails!: Subscription;

  handleNetworkClick(): void {
    if(this.network.id !== this.networkDetailsService.currentNetwork().id) {
      this.networkDetails = this.networkDetailsService.getNetworkDetails(this.network.id).subscribe();
    }
    if(this.favouriteStationsService.isFavouritesVisible()) {
      this.favouriteStationsService.toggleFavouritesVisibility();
    }
  }

  ngOnDestroy() {
    this.networkDetails.unsubscribe();
  }
}
