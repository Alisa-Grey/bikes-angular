export interface INetwork {
  href: string;
  name: string;
  id: string;
}

export interface IFetchNetworksResponse {
  networks: INetwork[];
}

export interface IStation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  free_bikes: string;
}

export interface INetworkWithStations extends INetwork {
  stations: IStation[];
}

export interface IFetchNetworkByIdResponse {
  network: INetworkWithStations;
}
