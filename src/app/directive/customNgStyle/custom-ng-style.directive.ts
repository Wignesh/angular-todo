import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgStyle]',
})
export class CustomNgStyleDirective {
  domElement: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;

    this.renderer.setStyle(this.domElement, 'background-color', 'orange');
  }
}
