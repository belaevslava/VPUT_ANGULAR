import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForHelpComponent } from './ask-for-help.component';

describe('AskForHelpComponent', () => {
  let component: AskForHelpComponent;
  let fixture: ComponentFixture<AskForHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
