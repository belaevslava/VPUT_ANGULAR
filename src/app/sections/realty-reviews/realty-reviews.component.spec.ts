import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyReviewsComponent } from './realty-reviews.component';

describe('RealtyReviewsComponent', () => {
  let component: RealtyReviewsComponent;
  let fixture: ComponentFixture<RealtyReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
