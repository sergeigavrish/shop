import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ConvertCaseDirective } from './directives/convert-case.directive';

@NgModule({
  declarations: [ObjectToArrayPipe, HighlightDirective, ConvertCaseDirective],
  exports: [ObjectToArrayPipe, HighlightDirective, ConvertCaseDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
