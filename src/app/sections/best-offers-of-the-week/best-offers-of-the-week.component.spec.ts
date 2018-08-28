import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOffersOfTheWeekComponent } from './best-offers-of-the-week.component';

describe('BestOffersOfTheWeekComponent', () => {
  let component: BestOffersOfTheWeekComponent;
  let fixture: ComponentFixture<BestOffersOfTheWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOffersOfTheWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOffersOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
