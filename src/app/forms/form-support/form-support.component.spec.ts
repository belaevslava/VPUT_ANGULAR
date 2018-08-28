import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSupportComponent } from './form-support.component';

describe('FormSupportComponent', () => {
  let component: FormSupportComponent;
  let fixture: ComponentFixture<FormSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
