import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

  bookForm: FormGroup;
  @Output() createBook = new EventEmitter();
  sub: any;
  cover: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9 ]*$")])],
      author: ["", Validators.required]
    });

    this.sub = this.bookForm.valueChanges.subscribe((value) => {
      value.title = this.toTitleCase(value.title);
      this.bookForm.patchValue({ title: value.title }, { emitEvent: false });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  add() {
    this.createBook.emit(new Book(this.bookForm.get('title').value,
      this.bookForm.get('author').value, this.cover, -1));
    this.bookForm.reset();
    this.cover = '';
  }

  toTitleCase(s: string) {
    if ((s === null) || (s === '')) {
      return '';
    }
    return s.replace(/\w\S*/g, (t: string) => {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  onDrop(e: any) {
    // step 1: alias the component this to a variable comp
    let comp = this;
		let size: number = 160;
    let oldHeight: number;
    let oldWidth: number;
    let newHeight: number;
    let newWidth: number;
    let files = e.target.files || e.dataTransfer.files;
    if (files && files.length > 0) {
        let f = files[0];
        let reader = new FileReader();
        reader.onload = (function (f) {
            return function (e2: any) {
                let image: HTMLImageElement = new Image();
                image.onload = function () {
                    oldHeight = (<HTMLImageElement>this).height;
                    oldWidth = (<HTMLImageElement>this).width;
                    newHeight = oldHeight;
                    newWidth = oldWidth;
                    if (oldHeight > size) {
                        newHeight = size;
                        newWidth = (newHeight * oldWidth) / oldHeight;
                    }
                    if (newWidth > size) {
                        let oldWidth = newWidth;
                        newWidth = size;
                        newHeight = (newWidth * newHeight) / oldWidth;
                    }
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(image, 0, 0, newWidth, newHeight);
                     // step 2:  retrieve a base64 encoded version of the image
                    // and assign it to the component's cover property      
                    comp.cover = canvas.toDataURL(f.type);
                };
                image.src = e2.target.result;
            };
        })(f);
        reader.readAsDataURL(f);
    }

  }

}
