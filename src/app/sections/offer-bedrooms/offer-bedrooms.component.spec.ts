import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBedroomsComponent } from './offer-bedrooms.component';

describe('OfferBedroomsComponent', () => {
  let component: OfferBedroomsComponent;
  let fixture: ComponentFixture<OfferBedroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBedroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
