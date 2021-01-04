import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './pipes/no-image.pipe';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  declarations: [NoImagePipe, DragAndDropDirective],
  imports: [
    CommonModule
  ],
  exports: [NoImagePipe, DragAndDropDirective]
})
export class SharedModule { }
