import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingFormComponent } from './renting-form.component';

describe('RentingFormComponent', () => {
  let component: RentingFormComponent;
  let fixture: ComponentFixture<RentingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
