import { InjectionToken, ValueProvider } from '@angular/core';

const constants = {
  App: 'TaskManager',
  Ver: '1.0'
};

export const CONSTANTS_TOKEN = new InjectionToken('CONSTANTS_TOKEN');

export const constantsProvider: ValueProvider = {
  provide: CONSTANTS_TOKEN,
  useValue: constants
};
