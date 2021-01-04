import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListChildrenComponent } from './country-list-children.component';

describe('CountryListChildrenComponent', () => {
  let component: CountryListChildrenComponent;
  let fixture: ComponentFixture<CountryListChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
