import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';
import {FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9 ]*$')])],
    author: ['', Validators.required]
  });
  @Output()
  createBook  = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  add(): void {
    const form = this.bookForm.value;
    this.createBook.emit(
      new Book(form.title,
               form.author,
               '', -1));
    this.bookForm.reset();
  }

}
