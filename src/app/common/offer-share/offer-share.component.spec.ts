import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferShareComponent } from './offer-share.component';

describe('OfferShareComponent', () => {
  let component: OfferShareComponent;
  let fixture: ComponentFixture<OfferShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
