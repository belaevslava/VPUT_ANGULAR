import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFavoritesComponent } from './toggle-favorites.component';

describe('ToggleFavoritesComponent', () => {
  let component: ToggleFavoritesComponent;
  let fixture: ComponentFixture<ToggleFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
