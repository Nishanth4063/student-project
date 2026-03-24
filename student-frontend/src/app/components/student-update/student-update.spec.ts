import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateComponent } from './student-update';

describe('StudentUpdateComponent', () => {
  let component: StudentUpdateComponent;
  let fixture: ComponentFixture<StudentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpdateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
