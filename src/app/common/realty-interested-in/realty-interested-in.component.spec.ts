import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyInterestedInComponent } from './realty-interested-in.component';

describe('RealtyInterestedInComponent', () => {
  let component: RealtyInterestedInComponent;
  let fixture: ComponentFixture<RealtyInterestedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyInterestedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyInterestedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
