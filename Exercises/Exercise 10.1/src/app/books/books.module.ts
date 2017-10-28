import { SharedModule } from './../common/shared.module';
import { BookService } from './book.service';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule ,
        RouterModule,
        SharedModule
    ],
    providers: [BookService],
    declarations: [BookListComponent, BookFormComponent],
    exports: [BookListComponent]
})
export class BooksModule {}