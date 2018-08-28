import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheComplexComponent } from './about-the-complex.component';

describe('AboutTheComplexComponent', () => {
  let component: AboutTheComplexComponent;
  let fixture: ComponentFixture<AboutTheComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
