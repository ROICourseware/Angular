import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
// import { BooksModule } from './books.module';
import { Book } from '../models/book';
import { Component } from '@angular/core';


@Component({selector: 'app-book-form', template: ''}) class BookFormStubComponent {}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let books: any;
  let elm: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookFormStubComponent ],
      // imports: [BooksModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    books = [{
      title: 'The Lord Of The Rings',
      author: 'J R R Tolkien',
      bookId: 1
    }, {
      title: 'The Hobbit',
      author: 'J R R Tolkien',
      bookId: 2
    }];
    elm = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should add a book to the array when addBook called', () => {
    component.books = books;
    component.addBook(new Book('title', 'author', '', -1));
    expect(books.length).toBe(3);
  });

  it ('should have 3 table rows when 2 books passed in', () => {
    component.books = books;
    fixture.detectChanges();
    const trs = elm.querySelectorAll('tr');
    expect(trs.length).toBe(3);
  });


  it ('should have LOTR as text of first td element', () => {
    component.books = books;
    fixture.detectChanges();
    const td = elm.querySelector('td');
    expect(td?.textContent).toEqual('The Lord Of The Rings');
  });

});
