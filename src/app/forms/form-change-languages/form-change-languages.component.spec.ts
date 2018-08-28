import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeLanguagesComponent } from './form-change-languages.component';

describe('FormChangeLanguagesComponent', () => {
  let component: FormChangeLanguagesComponent;
  let fixture: ComponentFixture<FormChangeLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangeLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangeLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
