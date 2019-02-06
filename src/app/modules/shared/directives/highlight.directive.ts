import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.color = '#dd00312b';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = null;
  }

  constructor() { }

}
