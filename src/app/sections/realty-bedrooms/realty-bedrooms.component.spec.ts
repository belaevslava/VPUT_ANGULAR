import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyBedroomsComponent } from './realty-bedrooms.component';

describe('RealtyBedroomsComponent', () => {
  let component: RealtyBedroomsComponent;
  let fixture: ComponentFixture<RealtyBedroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyBedroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyBedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
