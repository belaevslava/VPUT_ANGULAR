import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyShortDescriptionComponent } from './realty-short-description.component';

describe('RealtyShortDescriptionComponent', () => {
  let component: RealtyShortDescriptionComponent;
  let fixture: ComponentFixture<RealtyShortDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyShortDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
