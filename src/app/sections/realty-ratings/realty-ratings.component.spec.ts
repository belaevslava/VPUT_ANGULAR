import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyRatingsComponent } from './realty-ratings.component';

describe('RealtyRatingsComponent', () => {
  let component: RealtyRatingsComponent;
  let fixture: ComponentFixture<RealtyRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
