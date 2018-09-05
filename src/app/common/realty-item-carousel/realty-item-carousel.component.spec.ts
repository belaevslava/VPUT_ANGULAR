import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyItemCarouselComponent } from './realty-item-carousel.component';

describe('RealtyItemCarouselComponent', () => {
  let component: RealtyItemCarouselComponent;
  let fixture: ComponentFixture<RealtyItemCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyItemCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
