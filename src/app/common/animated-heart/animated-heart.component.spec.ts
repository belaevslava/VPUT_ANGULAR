import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedHeartComponent } from './animated-heart.component';

describe('AnimatedHeartComponent', () => {
  let component: AnimatedHeartComponent;
  let fixture: ComponentFixture<AnimatedHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
