import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarRentalComponent } from './form-car-rental.component';

describe('FormCarRentalComponent', () => {
  let component: FormCarRentalComponent;
  let fixture: ComponentFixture<FormCarRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCarRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
