import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Book from './../models/Book.model';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

    bookForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {    }

    ngOnInit() {
        this.bookForm = this.formBuilder.group({
            title:  ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9 ]*$")])],
            author: ["", Validators.required]
        });
    }

    @Output() createBook  = new EventEmitter();

    add() {
        this.createBook.emit(new Book(this.bookForm.get('title').value, 
                                      this.bookForm.get('author').value, 
                                      "", -1));
        this.bookForm.reset();
    }


}