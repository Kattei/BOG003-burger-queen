import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecComponent } from './inc-dec.component';

describe('IncDecComponent', () => {
  let component: IncDecComponent;
  let fixture: ComponentFixture<IncDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
