import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCharacteristicsComponent } from './offer-characteristics.component';

describe('OfferCharacteristicsComponent', () => {
  let component: OfferCharacteristicsComponent;
  let fixture: ComponentFixture<OfferCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
