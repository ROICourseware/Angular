import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


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
  createBook = new EventEmitter();
  cover = '';

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

  onDrop(e: any): void {
    // step 1: alias the component this to a variable comp
    const comp = this;
    const size = 160;
    let oldHeight: number;
    let oldWidth: number;
    let newHeight: number;
    let newWidth: number;
    const files = e.target.files || e.dataTransfer.files;
    if (files && files.length > 0) {
      const f = files[0];
      const reader = new FileReader();
      reader.onload = ((file): any => {
        return (e2: any): any => {
          const image: HTMLImageElement = new Image();
          image.onload = function(): void {
            oldHeight = (this as HTMLImageElement).height;
            oldWidth = (this as HTMLImageElement).width;
            newHeight = oldHeight;
            newWidth = oldWidth;
            if (oldHeight > size) {
              newHeight = size;
              newWidth = (newHeight * oldWidth) / oldHeight;
            }
            if (newWidth > size) {
              oldWidth = newWidth;
              newWidth = size;
              newHeight = (newWidth * newHeight) / oldWidth;
            }
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = newWidth;
            canvas.height = newHeight;
            if (ctx) {
              ctx.drawImage(image, 0, 0, newWidth, newHeight);
            }
            // step 2:  retrieve a base64 encoded version of the image
            // and assign it to the component's cover property
            comp.cover = canvas.toDataURL(file.type);
          };
          image.src = e2.target.result;
        };
      })(f);
      reader.readAsDataURL(f);
    }

  }

  add(): void {
    const form = this.bookForm.value;
    this.createBook.emit(
      new Book(form.title,
        form.author,
        this.cover, -1));
    this.bookForm.reset();
    this.cover = '';
  }

}
