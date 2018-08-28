import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCharacteristicComponent } from './offer-characteristic.component';

describe('OfferCharacteristicComponent', () => {
  let component: OfferCharacteristicComponent;
  let fixture: ComponentFixture<OfferCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
