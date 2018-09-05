import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRealtyCharacteristicsComponent } from './list-of-realty-characteristics.component';

describe('ListOfRealtyCharacteristicsComponent', () => {
  let component: ListOfRealtyCharacteristicsComponent;
  let fixture: ComponentFixture<ListOfRealtyCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRealtyCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRealtyCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
