import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlmuerzoCenaComponent } from './menu-almuerzo-cena.component';

describe('MenuAlmuerzoCenaComponent', () => {
  let component: MenuAlmuerzoCenaComponent;
  let fixture: ComponentFixture<MenuAlmuerzoCenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlmuerzoCenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlmuerzoCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
