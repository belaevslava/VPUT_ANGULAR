import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferImageSliderComponent } from './offer-image-slider.component';

describe('OfferImageSliderComponent', () => {
  let component: OfferImageSliderComponent;
  let fixture: ComponentFixture<OfferImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
