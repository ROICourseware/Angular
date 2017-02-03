import { Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[abDragger]'
})
export class DraggerDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.draggable = true;
     }

    @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent) {
        event.dataTransfer.setData("text", "start");
        this.el.nativeElement.style = 'border: 1px solid black';
    }

}


