import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './books/book-form.component';
import { BookListComponent } from './books/book-list.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:      [ FormsModule ],
      declarations: [AppComponent, BookListComponent, BookFormComponent]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
