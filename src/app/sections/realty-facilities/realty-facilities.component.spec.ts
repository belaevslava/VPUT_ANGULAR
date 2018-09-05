import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyFacilitiesComponent } from './realty-facilities.component';

describe('RealtyFacilitiesComponent', () => {
  let component: RealtyFacilitiesComponent;
  let fixture: ComponentFixture<RealtyFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
