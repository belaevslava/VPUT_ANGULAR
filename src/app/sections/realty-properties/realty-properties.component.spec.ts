import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertiesComponent } from './realty-properties.component';

describe('RealtyPropertiesComponent', () => {
  let component: RealtyPropertiesComponent;
  let fixture: ComponentFixture<RealtyPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
