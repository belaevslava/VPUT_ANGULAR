import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferShortDescriptionComponent } from './offer-short-description.component';

describe('OfferShortDescriptionComponent', () => {
  let component: OfferShortDescriptionComponent;
  let fixture: ComponentFixture<OfferShortDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferShortDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
