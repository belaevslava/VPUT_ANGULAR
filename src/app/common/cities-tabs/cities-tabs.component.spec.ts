import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTabsComponent } from './cities-tabs.component';

describe('CitiesTabsComponent', () => {
  let component: CitiesTabsComponent;
  let fixture: ComponentFixture<CitiesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
