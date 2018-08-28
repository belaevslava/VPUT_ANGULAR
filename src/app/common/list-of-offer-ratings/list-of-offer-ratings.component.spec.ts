import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOfferRatingsComponent } from './list-of-offer-ratings.component';

describe('ListOfOfferRatingsComponent', () => {
  let component: ListOfOfferRatingsComponent;
  let fixture: ComponentFixture<ListOfOfferRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOfferRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOfferRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
