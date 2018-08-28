import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeProfilePictureComponent } from './form-change-profile-picture.component';

describe('FormChangeProfilePictureComponent', () => {
  let component: FormChangeProfilePictureComponent;
  let fixture: ComponentFixture<FormChangeProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangeProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangeProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
