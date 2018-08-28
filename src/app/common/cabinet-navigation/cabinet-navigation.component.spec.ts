import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetNavigationComponent } from './cabinet-navigation.component';

describe('CabinetNavigationComponent', () => {
  let component: CabinetNavigationComponent;
  let fixture: ComponentFixture<CabinetNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
