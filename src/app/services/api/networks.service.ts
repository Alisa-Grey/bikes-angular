import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IFetchNetworkByIdResponse, IFetchNetworksResponse, INetwork, INetworkWithStations } from './interfaces/networks.interface';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworksService {
  http = inject(HttpClient);

  fetchAllNetworks(): Observable<INetwork[]> {
    return this.http.get<IFetchNetworksResponse>(`${environment.apiUrl}?fields=id,name`).pipe(map((res) => { return res.networks.slice(0, 16) }),
    catchError(async (error) => {
      console.error(error);
      return [] as INetwork[]
    }));
  }

  fetchNetworkById(networkId: string): Observable<INetworkWithStations> {
    return this.http.get<IFetchNetworkByIdResponse>(`${environment.apiUrl}/${networkId}`).pipe(map((res => { return res.network })), catchError(async (error) => {
      console.error(error);
      return {} as INetworkWithStations;
    }))
  }
}

