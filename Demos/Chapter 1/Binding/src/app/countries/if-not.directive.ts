import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[abIfNot]'
})
export class IfNotDirective {
    constructor(private tRef: TemplateRef<any>, private viewContainer: ViewContainerRef
    ) { }
    @Input() set abIfNot(condition: boolean) {
        if (condition) {
            this.viewContainer.clear();
        } else {
            this.viewContainer.createEmbeddedView(this.tRef);
        }
    }
}