import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithdrawComponent } from './page-withdraw.component';

describe('PageWithdrawComponent', () => {
  let component: PageWithdrawComponent;
  let fixture: ComponentFixture<PageWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
