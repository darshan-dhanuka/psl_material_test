import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStructureComponent } from './league-structure.component';

describe('LeagueStructureComponent', () => {
  let component: LeagueStructureComponent;
  let fixture: ComponentFixture<LeagueStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
