import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFundacionComponent } from './la-fundacion.component';

describe('LaFundacionComponent', () => {
  let component: LaFundacionComponent;
  let fixture: ComponentFixture<LaFundacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFundacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
