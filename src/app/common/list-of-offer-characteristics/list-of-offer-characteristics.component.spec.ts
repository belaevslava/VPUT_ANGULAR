import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOfferCharacteristicsComponent } from './list-of-offer-characteristics.component';

describe('ListOfOfferCharacteristicsComponent', () => {
  let component: ListOfOfferCharacteristicsComponent;
  let fixture: ComponentFixture<ListOfOfferCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOfferCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOfferCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
