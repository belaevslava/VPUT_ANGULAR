import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReferralBookingsPageComponent } from './user-referral-bookings-page.component';

describe('UserReferralBookingsPageComponent', () => {
  let component: UserReferralBookingsPageComponent;
  let fixture: ComponentFixture<UserReferralBookingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReferralBookingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReferralBookingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
