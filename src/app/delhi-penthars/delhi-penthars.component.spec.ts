import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiPentharsComponent } from './delhi-penthars.component';

describe('DelhiPentharsComponent', () => {
  let component: DelhiPentharsComponent;
  let fixture: ComponentFixture<DelhiPentharsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhiPentharsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiPentharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
