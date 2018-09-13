import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPricesComponent } from './realty-prices.component';

describe('RealtyPricesComponent', () => {
  let component: RealtyPricesComponent;
  let fixture: ComponentFixture<RealtyPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
