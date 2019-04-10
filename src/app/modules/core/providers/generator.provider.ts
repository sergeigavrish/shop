import { InjectionToken, FactoryProvider } from '@angular/core';

import { GeneratorModel } from '../models/interfaces';

function dec2hex(dec: number) {
  return ('0' + dec.toString(16)).substr(-2);
}

const generator = (len: number): GeneratorModel => {
  return {
    generate(): string {
      const arr = new Uint8Array((len || 40) / 2);
      window.crypto.getRandomValues(arr);
      return Array.from(arr, dec2hex).join('');
    }
  };
};

export const GENERATOR_TOKEN = new InjectionToken('GENERATOR_TOKEN');

export const generatorProvider = (len: number): FactoryProvider => {
  return {
    provide: GENERATOR_TOKEN,
    useFactory: (): Object => generator(len)
  };
};
