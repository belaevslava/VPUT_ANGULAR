import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsFilterFormComponent } from './bookings-filter-form.component';

describe('BookingsFilterFormComponent', () => {
  let component: BookingsFilterFormComponent;
  let fixture: ComponentFixture<BookingsFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
