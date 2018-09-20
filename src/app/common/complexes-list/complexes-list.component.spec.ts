import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexesListComponent } from './complexes-list.component';

describe('ComplexesListComponent', () => {
  let component: ComplexesListComponent;
  let fixture: ComponentFixture<ComplexesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
