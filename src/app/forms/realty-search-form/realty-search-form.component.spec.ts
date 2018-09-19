import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtySearchFormComponent } from './realty-search-form.component';

describe('RealtySearchFormComponent', () => {
  let component: RealtySearchFormComponent;
  let fixture: ComponentFixture<RealtySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtySearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
