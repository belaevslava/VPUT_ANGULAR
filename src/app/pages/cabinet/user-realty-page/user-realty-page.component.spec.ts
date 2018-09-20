import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealtyPageComponent } from './user-realty-page.component';

describe('UserRealtyPageComponent', () => {
  let component: UserRealtyPageComponent;
  let fixture: ComponentFixture<UserRealtyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealtyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealtyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
