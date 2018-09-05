import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexRealtyComponent } from './complex-realty.component';

describe('ComplexRealtyComponent', () => {
  let component: ComplexRealtyComponent;
  let fixture: ComponentFixture<ComplexRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
