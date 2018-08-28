import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEscortComponent } from './page-escort.component';

describe('PageEscortComponent', () => {
  let component: PageEscortComponent;
  let fixture: ComponentFixture<PageEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEscortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
