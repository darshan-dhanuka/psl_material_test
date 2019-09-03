import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuneSharksComponent } from './pune-sharks.component';

describe('PuneSharksComponent', () => {
  let component: PuneSharksComponent;
  let fixture: ComponentFixture<PuneSharksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuneSharksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuneSharksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
