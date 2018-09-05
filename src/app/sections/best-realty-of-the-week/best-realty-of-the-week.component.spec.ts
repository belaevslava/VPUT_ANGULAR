import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRealtyOfTheWeekComponent } from './best-realty-of-the-week.component';

describe('BestRealtyOfTheWeekComponent', () => {
  let component: BestRealtyOfTheWeekComponent;
  let fixture: ComponentFixture<BestRealtyOfTheWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRealtyOfTheWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRealtyOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
