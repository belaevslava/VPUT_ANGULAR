import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPlacesNearbyComponent } from './realty-places-nearby.component';

describe('RealtyPlacesNearbyComponent', () => {
  let component: RealtyPlacesNearbyComponent;
  let fixture: ComponentFixture<RealtyPlacesNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPlacesNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPlacesNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
