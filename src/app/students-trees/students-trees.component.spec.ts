import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTreesComponent } from './students-trees.component';

describe('StudentsTreesComponent', () => {
  let component: StudentsTreesComponent;
  let fixture: ComponentFixture<StudentsTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
