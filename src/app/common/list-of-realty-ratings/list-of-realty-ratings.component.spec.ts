import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRealtyRatingsComponent } from './list-of-realty-ratings.component';

describe('ListOfRealtyRatingsComponent', () => {
  let component: ListOfRealtyRatingsComponent;
  let fixture: ComponentFixture<ListOfRealtyRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRealtyRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRealtyRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
