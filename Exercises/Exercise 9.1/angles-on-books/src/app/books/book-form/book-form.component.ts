import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from '../../shared/no-image.pipe';
import { DragAndDropDirective } from '../../shared/drag-and-drop.directive';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, NoImagePipe, DragAndDropDirective],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm!: FormGroup;
  @Output() createBook = new EventEmitter();
  cover = '';


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
    this.createBook.emit(new Book(form.title,
      form.author,
      this.cover,
      -1));
    this.bookForm.reset();
    this.cover = '';
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

}
