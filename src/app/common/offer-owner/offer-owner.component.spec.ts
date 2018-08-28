import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOwnerComponent } from './offer-owner.component';

describe('OfferOwnerComponent', () => {
  let component: OfferOwnerComponent;
  let fixture: ComponentFixture<OfferOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
