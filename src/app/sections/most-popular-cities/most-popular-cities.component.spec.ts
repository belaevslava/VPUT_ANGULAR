import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularCitiesComponent } from './most-popular-cities.component';

describe('MostPopularCitiesComponent', () => {
  let component: MostPopularCitiesComponent;
  let fixture: ComponentFixture<MostPopularCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
