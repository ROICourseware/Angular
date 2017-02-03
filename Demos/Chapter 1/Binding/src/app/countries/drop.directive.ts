import { Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[abDrop]'
})
export class DropDirective {

    constructor(private el: ElementRef) { }

    @Output() onDropped: EventEmitter<any> = new EventEmitter();

    @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
        event.preventDefault();
        this.el.nativeElement.style = 'border: 1px solid black';
    }

    @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
        event.preventDefault();
        this.el.nativeElement.style = 'border: none';
        this.onDropped.emit(event);
    }


}


