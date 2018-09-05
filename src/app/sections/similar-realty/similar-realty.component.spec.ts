import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRealtyComponent } from './similar-realty.component';

describe('SimilarRealtyComponent', () => {
  let component: SimilarRealtyComponent;
  let fixture: ComponentFixture<SimilarRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
