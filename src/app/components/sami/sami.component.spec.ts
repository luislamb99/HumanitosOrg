import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamiComponent } from './sami.component';

describe('SamiComponent', () => {
  let component: SamiComponent;
  let fixture: ComponentFixture<SamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
