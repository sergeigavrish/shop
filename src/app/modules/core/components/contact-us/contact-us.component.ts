import { Component, OnInit, Inject, Optional } from '@angular/core';

import { ConfigModel, GeneratorModel } from './../../models/interfaces';
import { GENERATOR_TOKEN, CONSTANTS_TOKEN } from '../../providers';
import { ConfigOptionsService, LocalStorageService } from './../../services';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(GENERATOR_TOKEN) @Optional() private generatorService: GeneratorModel,
    @Inject(CONSTANTS_TOKEN) @Optional() private constantsService: ConfigModel
  ) { }

  ngOnInit() {
  }

}
