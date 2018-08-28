import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookingsFilterComponent } from './form-bookings-filter.component';

describe('FormBookingsFilterComponent', () => {
  let component: FormBookingsFilterComponent;
  let fixture: ComponentFixture<FormBookingsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBookingsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBookingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
