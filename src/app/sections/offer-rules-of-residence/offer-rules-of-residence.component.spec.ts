import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRulesOfResidenceComponent } from './offer-rules-of-residence.component';

describe('OfferRulesOfResidenceComponent', () => {
  let component: OfferRulesOfResidenceComponent;
  let fixture: ComponentFixture<OfferRulesOfResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRulesOfResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRulesOfResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
