import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyLocationComponent } from './realty-location.component';

describe('RealtyLocationComponent', () => {
  let component: RealtyLocationComponent;
  let fixture: ComponentFixture<RealtyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
