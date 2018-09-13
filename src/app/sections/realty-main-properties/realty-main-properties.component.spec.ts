import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyMainPropertiesComponent } from './realty-main-properties.component';

describe('RealtyMainPropertiesComponent', () => {
  let component: RealtyMainPropertiesComponent;
  let fixture: ComponentFixture<RealtyMainPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyMainPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyMainPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
