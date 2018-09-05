import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyMainCharacteristicsComponent } from './realty-main-characteristics.component';

describe('RealtyMainCharacteristicsComponent', () => {
  let component: RealtyMainCharacteristicsComponent;
  let fixture: ComponentFixture<RealtyMainCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyMainCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyMainCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
