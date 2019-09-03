import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkataKingsComponent } from './kolkata-kings.component';

describe('KolkataKingsComponent', () => {
  let component: KolkataKingsComponent;
  let fixture: ComponentFixture<KolkataKingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolkataKingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkataKingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
