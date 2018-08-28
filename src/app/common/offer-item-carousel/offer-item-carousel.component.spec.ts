import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemCarouselComponent } from './offer-item-carousel.component';

describe('OfferItemCarouselComponent', () => {
  let component: OfferItemCarouselComponent;
  let fixture: ComponentFixture<OfferItemCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferItemCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
