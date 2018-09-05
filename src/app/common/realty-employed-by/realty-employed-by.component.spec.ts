import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyEmployedByComponent } from './realty-employed-by.component';

describe('RealtyEmployedByComponent', () => {
  let component: RealtyEmployedByComponent;
  let fixture: ComponentFixture<RealtyEmployedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyEmployedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyEmployedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
