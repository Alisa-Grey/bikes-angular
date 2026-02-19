import { inject, Injectable, InjectionToken } from '@angular/core';
import { IStation } from './api/interfaces/networks.interface';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor() { }

  public storage = inject(BROWSER_STORAGE);

  getItem(key: string) {
    const storedValue = this.storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  setItem(key: string, value: IStation[]) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
