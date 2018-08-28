import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInterestedInComponent } from './offer-interested-in.component';

describe('OfferInterestedInComponent', () => {
  let component: OfferInterestedInComponent;
  let fixture: ComponentFixture<OfferInterestedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferInterestedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferInterestedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
