import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './book.service';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, of as observableOf  } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {


  errorMessage: string;
  books$: Observable<Book[]>;
  private searchText$ = new Subject<string>();
  
  constructor(private bookService: BookService) { }
 
  search(term: string) {
    this.searchText$.next(term);
  }
  
  ngOnInit() {
    this.books$ = this.bookService.getBooks().pipe(catchError((error) => {
            this.errorMessage = error;
            return observableOf([])
          }));

          // // VERSION USING THE SEARCH STREAM
    // this.books$ = this.searchText$.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap(term =>
    //     this.bookService.getBooksByTitle(term)) ,
    //     catchError((error) => {
    //       this.errorMessage = error;
    //       return observableOf([])
    //     })
    // );
  }

  ngAfterViewInit(): void {
    this.search('');
  }

  

  trackBook(i: number, book: Book): number {
    return book.bookId;
  }


}
