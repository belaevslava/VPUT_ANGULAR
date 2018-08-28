import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMainCharacteristicsComponent } from './offer-main-characteristics.component';

describe('OfferMainCharacteristicsComponent', () => {
  let component: OfferMainCharacteristicsComponent;
  let fixture: ComponentFixture<OfferMainCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferMainCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMainCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
