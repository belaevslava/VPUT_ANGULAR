import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTripsComponent } from './page-trips.component';

describe('PageTripsComponent', () => {
  let component: PageTripsComponent;
  let fixture: ComponentFixture<PageTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
