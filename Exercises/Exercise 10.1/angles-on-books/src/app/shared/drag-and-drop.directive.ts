import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]',
  standalone: true
})
export class DragAndDropDirective {

  constructor(private el: ElementRef) { }

  @Output() dropped: EventEmitter<any> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.el.nativeElement.style = 'border: 1px solid black';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.el.nativeElement.style = 'border: none';
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.el.nativeElement.style = 'border: none';
    this.dropped.emit(event);
  }

}
