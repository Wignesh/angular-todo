import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomNgForOf]',
})
export class CustomNgForDirective {
  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input()
  set appCustomNgForOf(collection: any) {
    this.view.clear();
    collection.forEach((item: any, index: any) => {
      this.view.createEmbeddedView(this.template, { $implicit: item, index });
    });
  }
}
