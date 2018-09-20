import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealtyPageComponent } from './add-realty-page.component';

describe('AddRealtyPageComponent', () => {
  let component: AddRealtyPageComponent;
  let fixture: ComponentFixture<AddRealtyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRealtyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealtyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
