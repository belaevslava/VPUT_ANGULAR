import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCleaningComponent } from './page-cleaning.component';

describe('PageCleaningComponent', () => {
  let component: PageCleaningComponent;
  let fixture: ComponentFixture<PageCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
