import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeroComponent } from './viajero.component';

describe('ViajeroComponent', () => {
  let component: ViajeroComponent;
  let fixture: ComponentFixture<ViajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
