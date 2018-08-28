import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReferralBookingsComponent } from './page-referral-bookings.component';

describe('PageReferralBookingsComponent', () => {
  let component: PageReferralBookingsComponent;
  let fixture: ComponentFixture<PageReferralBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReferralBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferralBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
