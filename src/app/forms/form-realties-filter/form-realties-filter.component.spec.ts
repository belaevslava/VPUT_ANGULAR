import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRealtiesFilterComponent } from './form-realties-filter.component';

describe('FormRealtiesFilterComponent', () => {
  let component: FormRealtiesFilterComponent;
  let fixture: ComponentFixture<FormRealtiesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRealtiesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRealtiesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
