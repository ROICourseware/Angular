import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
