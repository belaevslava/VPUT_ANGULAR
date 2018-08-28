import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComplexComponent } from './page-complex.component';

describe('PageComplexComponent', () => {
  let component: PageComplexComponent;
  let fixture: ComponentFixture<PageComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
