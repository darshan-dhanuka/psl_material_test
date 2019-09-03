import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiAnchorsComponent } from './mumbai-anchors.component';

describe('MumbaiAnchorsComponent', () => {
  let component: MumbaiAnchorsComponent;
  let fixture: ComponentFixture<MumbaiAnchorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumbaiAnchorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiAnchorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
