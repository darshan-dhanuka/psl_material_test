import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujratFalconsComponent } from './gujrat-falcons.component';

describe('GujratFalconsComponent', () => {
  let component: GujratFalconsComponent;
  let fixture: ComponentFixture<GujratFalconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujratFalconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujratFalconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
