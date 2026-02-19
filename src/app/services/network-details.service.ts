import { inject, Injectable, signal } from '@angular/core';
import { INetwork, INetworkWithStations } from './api/interfaces/networks.interface';
import { NetworksService } from './api/networks.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NetworkDetailsService {
  networksService = inject(NetworksService);
  currentNetwork = signal<INetworkWithStations>({} as INetworkWithStations);
  isNetworksLoading = signal<boolean>(false);
  isNetworkbyIdLoading = signal<boolean>(false);

  getNetworksList(): Observable<INetwork[]> {
    this.isNetworksLoading.set(true);
    return this.networksService.fetchAllNetworks().pipe(tap((res) => {
      this.isNetworksLoading.set(false);
      return res;
    }))
  }

  getNetworkDetails(id: string): Observable<INetworkWithStations> {
    this.isNetworkbyIdLoading.set(true);
    return this.networksService.fetchNetworkById(id).pipe(tap((res) => {
      this.isNetworkbyIdLoading.set(false);
      this.currentNetwork.set(res);
      return res;
    }))
  }
}
