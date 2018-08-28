import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransfersComponent } from './page-transfers.component';

describe('PageTransfersComponent', () => {
  let component: PageTransfersComponent;
  let fixture: ComponentFixture<PageTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
