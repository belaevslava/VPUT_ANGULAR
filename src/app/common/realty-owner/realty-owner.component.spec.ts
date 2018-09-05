import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyOwnerComponent } from './realty-owner.component';

describe('RealtyOwnerComponent', () => {
  let component: RealtyOwnerComponent;
  let fixture: ComponentFixture<RealtyOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
