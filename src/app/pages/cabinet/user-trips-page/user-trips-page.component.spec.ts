import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripsPageComponent } from './user-trips-page.component';

describe('UserTripsPageComponent', () => {
  let component: UserTripsPageComponent;
  let fixture: ComponentFixture<UserTripsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTripsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTripsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
