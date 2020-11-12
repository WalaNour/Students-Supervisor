import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTreesComponent } from './admin-trees.component';

describe('AdminTreesComponent', () => {
  let component: AdminTreesComponent;
  let fixture: ComponentFixture<AdminTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
