import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [ObjectToArrayPipe, HighlightDirective],
  exports: [ObjectToArrayPipe, HighlightDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
