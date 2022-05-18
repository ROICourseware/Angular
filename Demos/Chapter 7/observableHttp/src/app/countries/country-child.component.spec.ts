import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChildComponent } from './country-child.component';

describe('CountryChildComponent', () => {
  let component: CountryChildComponent;
  let fixture: ComponentFixture<CountryChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
