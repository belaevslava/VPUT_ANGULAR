import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecoveryComponent } from './form-recovery.component';

describe('FormRecoveryComponent', () => {
  let component: FormRecoveryComponent;
  let fixture: ComponentFixture<FormRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
