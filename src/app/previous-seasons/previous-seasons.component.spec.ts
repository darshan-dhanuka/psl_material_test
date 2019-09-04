import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSeasonsComponent } from './previous-seasons.component';

describe('PreviousSeasonsComponent', () => {
  let component: PreviousSeasonsComponent;
  let fixture: ComponentFixture<PreviousSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
