import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRealtyComponent } from './list-of-realty.component';

describe('ListOfRealtyComponent', () => {
  let component: ListOfRealtyComponent;
  let fixture: ComponentFixture<ListOfRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
