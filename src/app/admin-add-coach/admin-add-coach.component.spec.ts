import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCoachComponent } from './admin-add-coach.component';

describe('AdminAddCoachComponent', () => {
  let component: AdminAddCoachComponent;
  let fixture: ComponentFixture<AdminAddCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
