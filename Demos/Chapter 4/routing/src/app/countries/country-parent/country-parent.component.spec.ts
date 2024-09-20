import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryParentComponent } from './country-parent.component';

describe('CountryParentComponent', () => {
  let component: CountryParentComponent;
  let fixture: ComponentFixture<CountryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
