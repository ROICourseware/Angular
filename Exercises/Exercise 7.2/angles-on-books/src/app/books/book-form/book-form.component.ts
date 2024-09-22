import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm!: FormGroup;
  @Output() createBook = new EventEmitter();

  get title() { return this.bookForm.get('title')!; }
  get author() { return this.bookForm.get('author')!; }

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
    this.createBook.emit(
      new Book(form.title, form.author, '', -1));
  }




}
