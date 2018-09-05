import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchRealtyComponent } from './form-search-realty.component';

describe('FormSearchRealtyComponent', () => {
  let component: FormSearchRealtyComponent;
  let fixture: ComponentFixture<FormSearchRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
