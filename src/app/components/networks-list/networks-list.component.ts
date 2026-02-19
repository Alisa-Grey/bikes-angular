import { Component, inject } from '@angular/core';
import { INetwork } from 'src/app/services/api/interfaces/networks.interface';
import { NetworkCardComponent } from '../network-card/network-card.component';
import { NotFoundBlockComponent } from '../not-found-block/not-found-block.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { NetworkDetailsService } from 'src/app/services/network-details.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-networks-list',
  standalone: true,
  imports: [ AsyncPipe, NetworkCardComponent, NotFoundBlockComponent, PreloaderComponent],
  templateUrl: './networks-list.component.html',
  styleUrls: ['./networks-list.component.scss'],
})
export class NetworksListComponent {
  networkDetailsService = inject(NetworkDetailsService);
  networks$: Observable<INetwork[]> = this.networkDetailsService.getNetworksList();
  isLoading: boolean = false;
  networksSubscription!: Subscription;


  ngOnInit() {
    this.isLoading = this.networkDetailsService.isNetworksLoading();
  }
}
