import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Status404PageComponent } from './status404-page.component';

describe('Status404PageComponent', () => {
  let component: Status404PageComponent;
  let fixture: ComponentFixture<Status404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Status404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Status404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
