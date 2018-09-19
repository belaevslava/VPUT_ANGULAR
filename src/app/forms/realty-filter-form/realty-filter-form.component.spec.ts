import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyFilterFormComponent } from './realty-filter-form.component';

describe('RealtyFilterFormComponent', () => {
  let component: RealtyFilterFormComponent;
  let fixture: ComponentFixture<RealtyFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
