import { Injectable } from '@angular/core';

import { CoreServicesModule } from './../modules/core-services.module';
import { StorageModel } from '../models/interfaces';

@Injectable({
  providedIn: CoreServicesModule
})
export class LocalStorageService implements StorageModel {

  constructor() { }

  setItem<T>(data: T, key: string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
