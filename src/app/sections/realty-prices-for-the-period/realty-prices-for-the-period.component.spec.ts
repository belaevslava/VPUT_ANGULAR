import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPricesForThePeriodComponent } from './realty-prices-for-the-period.component';

describe('RealtyPricesForThePeriodComponent', () => {
  let component: RealtyPricesForThePeriodComponent;
  let fixture: ComponentFixture<RealtyPricesForThePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPricesForThePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPricesForThePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
