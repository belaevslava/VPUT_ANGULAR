import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyShareComponent } from './realty-share.component';

describe('RealtyShareComponent', () => {
  let component: RealtyShareComponent;
  let fixture: ComponentFixture<RealtyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
