import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyItemComponent } from './realty-item.component';

describe('RealtyItemComponent', () => {
  let component: RealtyItemComponent;
  let fixture: ComponentFixture<RealtyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
