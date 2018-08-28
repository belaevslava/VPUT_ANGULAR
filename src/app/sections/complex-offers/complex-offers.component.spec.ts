import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexOffersComponent } from './complex-offers.component';

describe('ComplexOffersComponent', () => {
  let component: ComplexOffersComponent;
  let fixture: ComponentFixture<ComplexOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
