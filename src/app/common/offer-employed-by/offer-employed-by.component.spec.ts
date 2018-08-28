import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferEmployedByComponent } from './offer-employed-by.component';

describe('OfferEmployedByComponent', () => {
  let component: OfferEmployedByComponent;
  let fixture: ComponentFixture<OfferEmployedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferEmployedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferEmployedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
