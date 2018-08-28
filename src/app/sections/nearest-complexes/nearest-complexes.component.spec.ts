import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestComplexesComponent } from './nearest-complexes.component';

describe('NearestComplexesComponent', () => {
  let component: NearestComplexesComponent;
  let fixture: ComponentFixture<NearestComplexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestComplexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestComplexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
