import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyDescriptionComponent } from './realty-description.component';

describe('RealtyDescriptionComponent', () => {
  let component: RealtyDescriptionComponent;
  let fixture: ComponentFixture<RealtyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
