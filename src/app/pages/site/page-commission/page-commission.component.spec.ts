import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommissionComponent } from './page-commission.component';

describe('PageCommissionComponent', () => {
  let component: PageCommissionComponent;
  let fixture: ComponentFixture<PageCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
