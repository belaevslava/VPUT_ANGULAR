import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsOfTheComplexComponent } from './characteristics-of-the-complex.component';

describe('CharacteristicsOfTheComplexComponent', () => {
  let component: CharacteristicsOfTheComplexComponent;
  let fixture: ComponentFixture<CharacteristicsOfTheComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsOfTheComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsOfTheComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
