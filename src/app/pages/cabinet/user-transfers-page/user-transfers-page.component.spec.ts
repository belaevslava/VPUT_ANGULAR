import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransfersPageComponent } from './user-transfers-page.component';

describe('UserTransfersPageComponent', () => {
  let component: UserTransfersPageComponent;
  let fixture: ComponentFixture<UserTransfersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransfersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransfersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
