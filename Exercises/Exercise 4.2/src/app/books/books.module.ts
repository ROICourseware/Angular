import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [BookListComponent, BookFormComponent],
    exports: [BookListComponent]
})
export class BooksModule {}