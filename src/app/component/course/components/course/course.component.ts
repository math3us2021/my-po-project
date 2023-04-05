import { Component } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import { Course } from '../../models/course-type';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses: Course[] = [];
  constructor(private courseService: CourseServiceService) { }

  ngOnInit(){
    this.courseService.getCourse().subscribe((course)=>{
      this.courses = course;
    })
  }
}
