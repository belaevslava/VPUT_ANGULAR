import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersOnTheMapComponent } from './offers-on-the-map.component';

describe('OffersOnTheMapComponent', () => {
  let component: OffersOnTheMapComponent;
  let fixture: ComponentFixture<OffersOnTheMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersOnTheMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersOnTheMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
