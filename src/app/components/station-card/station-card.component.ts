import { TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FavouriteStationsService } from 'src/app/services/favourite-stations.service';
import { HeartIconComponent } from '../heart-icon/heart-icon.component';
import { IStation } from 'src/app/services/api/interfaces/networks.interface';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [TitleCasePipe, HeartIconComponent],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.scss'
})
export class StationCardComponent {
  @Input() station: IStation = {} as IStation;
  isFavourite: boolean = false;
  favouriteStationsService = inject(FavouriteStationsService);

  checkIsInFavourites(): void {
    this.isFavourite = this.favouriteStationsService.storedStations().some(item => item.id === this.station.id);
  }

   ngOnInit(): void {
    this.checkIsInFavourites();
  }

  toggleItemInFavourites() {
    this.favouriteStationsService.toggleItemInFavourites(this.station);
    this.checkIsInFavourites();
  }
}
