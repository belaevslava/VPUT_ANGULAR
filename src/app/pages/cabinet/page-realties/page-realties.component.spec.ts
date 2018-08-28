import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRealtiesComponent } from './page-realties.component';

describe('PageRealtiesComponent', () => {
  let component: PageRealtiesComponent;
  let fixture: ComponentFixture<PageRealtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRealtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRealtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
