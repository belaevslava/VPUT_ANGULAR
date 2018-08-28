import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPlacesNearbyComponent } from './offer-places-nearby.component';

describe('OfferPlacesNearbyComponent', () => {
  let component: OfferPlacesNearbyComponent;
  let fixture: ComponentFixture<OfferPlacesNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferPlacesNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPlacesNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
