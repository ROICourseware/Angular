import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule ,
    RouterModule 
  ],
  declarations: [BookListComponent, BookFormComponent],
  exports: [BookListComponent]
})
export class BooksModule { }
