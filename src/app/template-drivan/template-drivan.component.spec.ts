import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivanComponent } from './template-drivan.component';

describe('TemplateDrivanComponent', () => {
  let component: TemplateDrivanComponent;
  let fixture: ComponentFixture<TemplateDrivanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
