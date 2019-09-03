import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PslTeamComponent } from './psl-team.component';

describe('PslTeamComponent', () => {
  let component: PslTeamComponent;
  let fixture: ComponentFixture<PslTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PslTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PslTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
