import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookingsComponent } from './page-bookings.component';

describe('PageBookingsComponent', () => {
  let component: PageBookingsComponent;
  let fixture: ComponentFixture<PageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
