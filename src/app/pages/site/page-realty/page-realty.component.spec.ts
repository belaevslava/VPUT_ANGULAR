import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRealtyComponent } from './page-realty.component';

describe('PageRealtyComponent', () => {
  let component: PageRealtyComponent;
  let fixture: ComponentFixture<PageRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
