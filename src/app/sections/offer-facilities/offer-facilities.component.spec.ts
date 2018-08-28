import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFacilitiesComponent } from './offer-facilities.component';

describe('OfferFacilitiesComponent', () => {
  let component: OfferFacilitiesComponent;
  let fixture: ComponentFixture<OfferFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
