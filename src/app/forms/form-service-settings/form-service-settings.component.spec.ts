import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceSettingsComponent } from './form-service-settings.component';

describe('FormServiceSettingsComponent', () => {
  let component: FormServiceSettingsComponent;
  let fixture: ComponentFixture<FormServiceSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServiceSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
