import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { constantsProvider, generatorProvider } from './providers';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoreServicesModule } from './modules/core-services.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    CoreServicesModule
  ],
  providers: [
    constantsProvider,
    generatorProvider(20)
  ],
  exports: [ContactUsComponent]
})
export class CoreModule { }
