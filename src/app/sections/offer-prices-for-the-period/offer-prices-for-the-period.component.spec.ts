import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPricesForThePeriodComponent } from './offer-prices-for-the-period.component';

describe('OfferPricesForThePeriodComponent', () => {
  let component: OfferPricesForThePeriodComponent;
  let fixture: ComponentFixture<OfferPricesForThePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferPricesForThePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPricesForThePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
