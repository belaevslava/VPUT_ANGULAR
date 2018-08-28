import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthorizationComponent } from './social-authorization.component';

describe('SocialAuthorizationComponent', () => {
  let component: SocialAuthorizationComponent;
  let fixture: ComponentFixture<SocialAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
