import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrustComponent } from './page-trust.component';

describe('PageTrustComponent', () => {
  let component: PageTrustComponent;
  let fixture: ComponentFixture<PageTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
