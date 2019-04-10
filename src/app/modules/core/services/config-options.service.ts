import { Injectable } from '@angular/core';

import { ConfigModel, ConfigOptions } from './../models/interfaces';
import { CoreServicesModule } from '../modules/core-services.module';

@Injectable({
  providedIn: CoreServicesModule
})
export class ConfigOptionsService implements ConfigModel {

  config: Partial<ConfigOptions>;

  constructor() { }

  setConfig(config: Partial<ConfigOptions>) {
    this.config = { ...config };
  }

  getConfig(): Partial<ConfigOptions> {
    return this.config;
  }

}
