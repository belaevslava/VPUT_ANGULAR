import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyCharacteristicComponent } from './realty-characteristic.component';

describe('RealtyCharacteristicComponent', () => {
  let component: RealtyCharacteristicComponent;
  let fixture: ComponentFixture<RealtyCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
