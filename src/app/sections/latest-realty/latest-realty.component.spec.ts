import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRealtyComponent } from './latest-realty.component';

describe('LatestRealtyComponent', () => {
  let component: LatestRealtyComponent;
  let fixture: ComponentFixture<LatestRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
