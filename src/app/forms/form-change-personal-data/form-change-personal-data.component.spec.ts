import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangePersonalDataComponent } from './form-change-personal-data.component';

describe('FormChangePersonalDataComponent', () => {
  let component: FormChangePersonalDataComponent;
  let fixture: ComponentFixture<FormChangePersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangePersonalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangePersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
