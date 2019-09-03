import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanTiltersComponent } from './rajasthan-tilters.component';

describe('RajasthanTiltersComponent', () => {
  let component: RajasthanTiltersComponent;
  let fixture: ComponentFixture<RajasthanTiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajasthanTiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajasthanTiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
