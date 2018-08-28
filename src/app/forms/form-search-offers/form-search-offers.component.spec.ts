import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchOffersComponent } from './form-search-offers.component';

describe('FormSearchOffersComponent', () => {
  let component: FormSearchOffersComponent;
  let fixture: ComponentFixture<FormSearchOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSearchOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
