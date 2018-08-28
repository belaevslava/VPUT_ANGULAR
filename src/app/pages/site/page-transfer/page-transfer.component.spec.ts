import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransferComponent } from './page-transfer.component';

describe('PageTransferComponent', () => {
  let component: PageTransferComponent;
  let fixture: ComponentFixture<PageTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
