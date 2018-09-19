import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryModalComponent } from './password-recovery-modal.component';

describe('PasswordRecoveryModalComponent', () => {
  let component: PasswordRecoveryModalComponent;
  let fixture: ComponentFixture<PasswordRecoveryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
