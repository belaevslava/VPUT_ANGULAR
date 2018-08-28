import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexOnTheMapComponent } from './complex-on-the-map.component';

describe('ComplexOnTheMapComponent', () => {
  let component: ComplexOnTheMapComponent;
  let fixture: ComponentFixture<ComplexOnTheMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexOnTheMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexOnTheMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
