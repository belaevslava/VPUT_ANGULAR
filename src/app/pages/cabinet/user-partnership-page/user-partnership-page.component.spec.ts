import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPartnershipPageComponent } from './user-partnership-page.component';

describe('UserPartnershipPageComponent', () => {
  let component: UserPartnershipPageComponent;
  let fixture: ComponentFixture<UserPartnershipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPartnershipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPartnershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
