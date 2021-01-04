import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from './book.service';



@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [BookService],
  exports: [BookListComponent]
})
export class BooksModule { }
