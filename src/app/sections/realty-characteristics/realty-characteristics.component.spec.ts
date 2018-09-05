import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyCharacteristicsComponent } from './realty-characteristics.component';

describe('RealtyCharacteristicsComponent', () => {
  let component: RealtyCharacteristicsComponent;
  let fixture: ComponentFixture<RealtyCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
