import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetalsComponent } from './course-detals.component';

describe('CourseDetalsComponent', () => {
  let component: CourseDetalsComponent;
  let fixture: ComponentFixture<CourseDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
