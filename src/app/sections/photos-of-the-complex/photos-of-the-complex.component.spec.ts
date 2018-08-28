import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosOfTheComplexComponent } from './photos-of-the-complex.component';

describe('PhotosOfTheComplexComponent', () => {
  let component: PhotosOfTheComplexComponent;
  let fixture: ComponentFixture<PhotosOfTheComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosOfTheComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosOfTheComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
