import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSettingsFormComponent } from './service-settings-form.component';

describe('ServiceSettingsFormComponent', () => {
  let component: ServiceSettingsFormComponent;
  let fixture: ComponentFixture<ServiceSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
