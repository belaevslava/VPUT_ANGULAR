import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortPageComponent } from './escort-page.component';

describe('EscortPageComponent', () => {
  let component: EscortPageComponent;
  let fixture: ComponentFixture<EscortPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscortPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
