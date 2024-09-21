import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  
  @Output() 
  createBook = new EventEmitter();

  book: Book = new Book('', '', '', -1);

  add(): void {
    this.createBook.emit(this.book);
    this.book = new Book('', '', '', -1);
  }


  
}
