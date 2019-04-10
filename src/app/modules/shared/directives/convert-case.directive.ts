import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from '@angular/core';
import { TitleCasePipe } from "@angular/common";

@Directive({
  selector: '[appConvertCase]'
})
export class ConvertCaseDirective {

  @Input() text: string;

  el: HTMLElement;
  isUpperCase = false;

  @HostListener('click', ['$event']) onclick(e) {
    this.isUpperCase = !this.isUpperCase;
    this.convertCase();
  }

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.el = el.nativeElement;
  }

  convertCase(): void {
    this.renderer.setProperty(
      this.el,
      'innerText',
      this.isUpperCase
        ? this.text.toUpperCase()
        : new TitleCasePipe().transform(this.text)
    );
  }

}
