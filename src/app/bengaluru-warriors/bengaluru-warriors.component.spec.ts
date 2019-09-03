import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BengaluruWarriorsComponent } from './bengaluru-warriors.component';

describe('BengaluruWarriorsComponent', () => {
  let component: BengaluruWarriorsComponent;
  let fixture: ComponentFixture<BengaluruWarriorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BengaluruWarriorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BengaluruWarriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
