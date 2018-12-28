import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NoImagePipe } from './pipes/no-image.pipe';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NoImagePipe, DragAndDropDirective],
  exports : [HttpClientModule, CommonModule, NoImagePipe, DragAndDropDirective]
})
export class SharedModule { }
