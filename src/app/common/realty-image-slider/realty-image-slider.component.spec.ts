import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyImageSliderComponent } from './realty-image-slider.component';

describe('RealtyImageSliderComponent', () => {
  let component: RealtyImageSliderComponent;
  let fixture: ComponentFixture<RealtyImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
