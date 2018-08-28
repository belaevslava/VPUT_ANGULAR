import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOfTheComplexComponent } from './description-of-the-complex.component';

describe('DescriptionOfTheComplexComponent', () => {
  let component: DescriptionOfTheComplexComponent;
  let fixture: ComponentFixture<DescriptionOfTheComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionOfTheComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionOfTheComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
