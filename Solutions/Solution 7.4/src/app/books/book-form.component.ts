import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Book from './../models/Book.model';

@Component({
    selector: 'book-form',
    template: `<form class="form-group form-inline col-sm-offset-1" novalidate [formGroup]="bookForm" (ngSubmit)="add()">
                <label class="control-label">Title:
                <input type="text" class="form-control" formControlName="title" /></label>
		        <label class="control-label">Author:
                <input type="text" class="form-control" formControlName="author" /></label>
      		    <button type="submit" class="btn btn-primary"  [disabled]="!bookForm.valid">Add Book</button>             
                <div *ngIf="bookForm.get('title').hasError('required') && !bookForm.get('title').pristine" class="alert alert-danger">
                    Title is required
                </div>
                <div *ngIf="bookForm.get('title').hasError('minlength') && !bookForm.get('author').pristine && !bookForm.get('title').pristine" class="alert alert-danger">
                    Title must be at least 3 characters
                </div> 
                <div *ngIf="bookForm.get('title').hasError('pattern') && !bookForm.get('title').pristine" class="alert alert-danger">
                    Only letters and numbers are allowed
                </div>               
                <div *ngIf="bookForm.get('author').hasError('required') && !bookForm.get('author').pristine" class="alert alert-danger">
                    Author is required
                </div>
               </form>`
})
export class BookFormComponent implements OnInit, OnDestroy {

    sub: any;
    bookForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {    }

    ngOnInit() {
        this.bookForm = this.formBuilder.group({
            title:  ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9 ]*$")])],
            author: ["", Validators.required]
        });

        this.sub = this.bookForm.valueChanges
            .subscribe((value) => {
                value.title = this.toTitleCase(value.title);
                this.bookForm.patchValue({title: value.title}, { emitEvent: false });
                //debug code
                // console.log("Form  value = ", value);
            });

    }

    ngOnDestroy() {
         this.sub.unsubscribe();
    }

    @Output() createBook  = new EventEmitter();

    add() {
        this.createBook.emit(new Book(this.bookForm.get('title').value, 
                                      this.bookForm.get('author').value, 
                                      "", -1));
        this.bookForm.reset();
    }

    toTitleCase(s: string) {
        if ((s === null) || (s === '')) {
            return '';
        }
        return s.replace(/\w\S*/g, (t: string) => {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        });
    }


}