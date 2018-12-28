import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoImagePipe],
  exports : [NoImagePipe]
})
export class SharedModule { }
