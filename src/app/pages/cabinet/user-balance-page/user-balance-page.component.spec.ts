import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBalancePageComponent } from './user-balance-page.component';

describe('UserBalancePageComponent', () => {
  let component: UserBalancePageComponent;
  let fixture: ComponentFixture<UserBalancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBalancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBalancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
