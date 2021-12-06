import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlmuerzoComponent } from './modal-almuerzo.component';

describe('ModalAlmuerzoComponent', () => {
  let component: ModalAlmuerzoComponent;
  let fixture: ComponentFixture<ModalAlmuerzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlmuerzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
