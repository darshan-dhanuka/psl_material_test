import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhraBulletsComponent } from './andhra-bullets.component';

describe('AndhraBulletsComponent', () => {
  let component: AndhraBulletsComponent;
  let fixture: ComponentFixture<AndhraBulletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndhraBulletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndhraBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
