import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangeFormComponent } from './language-change-form.component';

describe('LanguageChangeFormComponent', () => {
  let component: LanguageChangeFormComponent;
  let fixture: ComponentFixture<LanguageChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
