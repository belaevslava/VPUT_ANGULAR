import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRealtyFilterComponent } from './form-realty-filter.component';

describe('FormRealtyFilterComponent', () => {
  let component: FormRealtyFilterComponent;
  let fixture: ComponentFixture<FormRealtyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRealtyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRealtyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
