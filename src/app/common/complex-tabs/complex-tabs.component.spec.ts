import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTabsComponent } from './complex-tabs.component';

describe('ComplexTabsComponent', () => {
  let component: ComplexTabsComponent;
  let fixture: ComponentFixture<ComplexTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
