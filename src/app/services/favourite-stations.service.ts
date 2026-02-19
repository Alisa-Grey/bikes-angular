import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IStation } from './api/interfaces/networks.interface';

@Injectable({
  providedIn: 'root'
})

export class FavouriteStationsService {
  localStorageService = inject(LocalStorageService);
  isFavouritesVisible = signal<boolean>(false);
  storedStations = signal<IStation[]>([]);

  toggleFavouritesVisibility() {
    this.isFavouritesVisible.set(!this.isFavouritesVisible());
  }

  getFavouriteStations(): IStation[] {
    const stationsInLocalStorage = this.localStorageService.getItem('favourite-stations');
    this.storedStations.set(stationsInLocalStorage);
    return stationsInLocalStorage;
  }

  toggleItemInFavourites(station: IStation) {
    const indexInFavourites = this.storedStations().findIndex(item => item.id === station.id);
    const stationsArray = indexInFavourites === -1 ? [...this.storedStations(), station] : [...this.storedStations().filter(item => item.id !== station.id)];
    this.localStorageService.setItem('favourite-stations', stationsArray);
    this.storedStations.set(stationsArray);
  }
}
