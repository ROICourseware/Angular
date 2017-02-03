import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './books/book-form.component';
import { BookListComponent } from './books/book-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, BookListComponent, BookFormComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should display the title "Angles on Books"', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let dbElm = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
    expect(dbElm.nativeElement.textContent.includes("Angles On Books"))
      .toBe(true, 'should contain "Angles on Books"');
  });
});
