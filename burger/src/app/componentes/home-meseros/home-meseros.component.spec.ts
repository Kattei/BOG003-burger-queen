import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMeserosComponent } from './home-meseros.component';

describe('HomeMeserosComponent', () => {
  let component: HomeMeserosComponent;
  let fixture: ComponentFixture<HomeMeserosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMeserosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMeserosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
