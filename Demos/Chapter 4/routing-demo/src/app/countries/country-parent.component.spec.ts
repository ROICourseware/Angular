import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryParentComponent } from './country-parent.component';

describe('CountryParentComponent', () => {
  let component: CountryParentComponent;
  let fixture: ComponentFixture<CountryParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
