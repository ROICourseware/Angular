import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  constructor(private tRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appIfNot(condition: boolean) {
    if (condition) {
        this.viewContainer.clear();
    } else {
        this.viewContainer.createEmbeddedView(this.tRef);
    }
}
}
