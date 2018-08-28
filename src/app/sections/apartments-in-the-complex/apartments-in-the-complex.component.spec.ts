import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsInTheComplexComponent } from './apartments-in-the-complex.component';

describe('ApartmentsInTheComplexComponent', () => {
  let component: ApartmentsInTheComplexComponent;
  let fixture: ComponentFixture<ApartmentsInTheComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentsInTheComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsInTheComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
