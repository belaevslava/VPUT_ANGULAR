import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarRentalComponent } from './page-car-rental.component';

describe('PageCarRentalComponent', () => {
  let component: PageCarRentalComponent;
  let fixture: ComponentFixture<PageCarRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
