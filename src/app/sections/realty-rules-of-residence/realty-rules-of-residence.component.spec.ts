import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyRulesOfResidenceComponent } from './realty-rules-of-residence.component';

describe('RealtyRulesOfResidenceComponent', () => {
  let component: RealtyRulesOfResidenceComponent;
  let fixture: ComponentFixture<RealtyRulesOfResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyRulesOfResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyRulesOfResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
