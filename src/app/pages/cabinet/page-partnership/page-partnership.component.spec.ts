import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnershipComponent } from './page-partnership.component';

describe('PagePartnershipComponent', () => {
  let component: PagePartnershipComponent;
  let fixture: ComponentFixture<PagePartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
