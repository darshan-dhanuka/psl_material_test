import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiThalaivasComponent } from './chennai-thalaivas.component';

describe('ChennaiThalaivasComponent', () => {
  let component: ChennaiThalaivasComponent;
  let fixture: ComponentFixture<ChennaiThalaivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennaiThalaivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaiThalaivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
