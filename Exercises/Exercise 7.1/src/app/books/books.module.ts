import { BookService } from './book.service';
import { NoImagePipe } from './../common/no-image.pipe';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    providers: [BookService],
    declarations: [BookListComponent, BookFormComponent, NoImagePipe],
    exports: [BookListComponent]
})
export class BooksModule {}