import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [BookListComponent, BookFormComponent],
    exports: [BookListComponent]
})
export class BooksModule {}