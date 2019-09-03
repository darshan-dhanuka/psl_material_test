import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabBluffersComponent } from './punjab-bluffers.component';

describe('PunjabBluffersComponent', () => {
  let component: PunjabBluffersComponent;
  let fixture: ComponentFixture<PunjabBluffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunjabBluffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabBluffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
