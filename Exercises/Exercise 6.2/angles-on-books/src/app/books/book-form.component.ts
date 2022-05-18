import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup; 
  @Output() createBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ]),
      author: new FormControl('', Validators.required)
    });
  }

  add(): void {
    const form = this.bookForm.value;
    this.createBook.emit(new Book(form.title,
      form.author,
      '',
      -1));
    this.bookForm.reset();
  }

  get title() { return this.bookForm.get('title')!; }

  get author() { return this.bookForm.get('author')!; }

}
