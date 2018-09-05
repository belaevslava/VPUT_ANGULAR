import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyOnTheMapComponent } from './realty-on-the-map.component';

describe('RealtyOnTheMapComponent', () => {
  let component: RealtyOnTheMapComponent;
  let fixture: ComponentFixture<RealtyOnTheMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyOnTheMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyOnTheMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
