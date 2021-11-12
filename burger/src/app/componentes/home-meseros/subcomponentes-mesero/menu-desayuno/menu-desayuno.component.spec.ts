import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesayunoComponent } from './menu-desayuno.component';

describe('MenuDesayunoComponent', () => {
  let component: MenuDesayunoComponent;
  let fixture: ComponentFixture<MenuDesayunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDesayunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDesayunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
