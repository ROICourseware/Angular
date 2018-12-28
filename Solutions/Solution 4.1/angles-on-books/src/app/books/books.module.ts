import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BookListComponent, BookFormComponent],
  exports: [BookListComponent]
})
export class BooksModule { }
