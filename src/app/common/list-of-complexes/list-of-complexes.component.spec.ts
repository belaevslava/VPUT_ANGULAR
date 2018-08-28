import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfComplexesComponent } from './list-of-complexes.component';

describe('ListOfComplexesComponent', () => {
  let component: ListOfComplexesComponent;
  let fixture: ComponentFixture<ListOfComplexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfComplexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfComplexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
