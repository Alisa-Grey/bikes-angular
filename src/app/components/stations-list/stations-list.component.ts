import { Component, effect, inject } from '@angular/core';
import { StationCardComponent } from '../station-card/station-card.component';
import { NotFoundBlockComponent } from '../not-found-block/not-found-block.component';
import { NetworkDetailsService } from 'src/app/services/network-details.service';
import { FavouriteStationsService } from 'src/app/services/favourite-stations.service';
import { PreloaderComponent } from '../preloader/preloader.component';
import { INetworkWithStations, IStation } from 'src/app/services/api/interfaces/networks.interface';

@Component({
  selector: 'app-stations-list',
  standalone: true,
  imports: [StationCardComponent, NotFoundBlockComponent, PreloaderComponent],
  templateUrl: './stations-list.component.html',
  styleUrl: './stations-list.component.scss'
})
export class StationsListComponent {
  networkDetailsService = inject(NetworkDetailsService);
  favouriteStationsService = inject(FavouriteStationsService);
  stations: IStation[] = [];
  listTitle: string = '';
  isFavouritesVisible: boolean = false;
  currentNetwork: INetworkWithStations = {} as INetworkWithStations;

  constructor() {
    effect(() => {
      this.isFavouritesVisible = this.favouriteStationsService.isFavouritesVisible();
      this.listTitle = this.isFavouritesVisible ? 'Favourite Stations' : 'Stations'
      this.currentNetwork = this.networkDetailsService.currentNetwork();
      this.stations = this.isFavouritesVisible ? this.favouriteStationsService.storedStations() : this.networkDetailsService.currentNetwork().stations;
    });
  }
}
