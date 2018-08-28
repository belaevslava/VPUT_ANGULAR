import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfReviewsComponent } from './list-of-reviews.component';

describe('ListOfReviewsComponent', () => {
  let component: ListOfReviewsComponent;
  let fixture: ComponentFixture<ListOfReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
