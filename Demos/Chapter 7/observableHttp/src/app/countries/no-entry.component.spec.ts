import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEntryComponent } from './no-entry.component';

describe('NoEntryComponent', () => {
  let component: NoEntryComponent;
  let fixture: ComponentFixture<NoEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
