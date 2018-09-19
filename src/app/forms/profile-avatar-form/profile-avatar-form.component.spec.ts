import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatarFormComponent } from './profile-avatar-form.component';

describe('ProfileAvatarFormComponent', () => {
  let component: ProfileAvatarFormComponent;
  let fixture: ComponentFixture<ProfileAvatarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAvatarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAvatarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
