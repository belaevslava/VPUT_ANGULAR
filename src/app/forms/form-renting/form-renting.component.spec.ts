import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRentingComponent } from './form-renting.component';

describe('FormRentingComponent', () => {
  let component: FormRentingComponent;
  let fixture: ComponentFixture<FormRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
