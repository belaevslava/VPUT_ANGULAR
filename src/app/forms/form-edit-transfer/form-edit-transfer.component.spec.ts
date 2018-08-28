import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTransferComponent } from './form-edit-transfer.component';

describe('FormEditTransferComponent', () => {
  let component: FormEditTransferComponent;
  let fixture: ComponentFixture<FormEditTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
