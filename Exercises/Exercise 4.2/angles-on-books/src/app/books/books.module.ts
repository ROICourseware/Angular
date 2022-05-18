import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BookListComponent, BookFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
