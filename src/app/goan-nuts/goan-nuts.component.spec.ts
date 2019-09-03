import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoanNutsComponent } from './goan-nuts.component';

describe('GoanNutsComponent', () => {
  let component: GoanNutsComponent;
  let fixture: ComponentFixture<GoanNutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoanNutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoanNutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
