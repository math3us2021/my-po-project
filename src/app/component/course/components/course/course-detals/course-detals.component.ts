import { Component } from '@angular/core';
import { CourseServiceService } from '../../../services/course-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../../models/course-type';

@Component({
  selector: 'app-course-detals',
  templateUrl: './course-detals.component.html',
  styleUrls: ['./course-detals.component.css']
})
export class CourseDetalsComponent {
  inscription: Subscription = new Subscription();
  course = {} as Course;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseServiceService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
         this.courseService.getCourseById(id).subscribe(
          (res: Course) => {
            this.course = res
          })
      })
  }

  // columns = [
  //   { property: 'id', label: 'Código', align: 'center', freeze: true},
  //   { property: 'description', label: 'Nome', width: '500px',  align: 'center', required: true },
  //   { property: 'time', label: 'Tempo', width: '50px', required: true },
  // ]
  // rowActions = {
    // beforeSave: this.onBeforeSave.bind(this),
    // afterSave: this.onAfterSave.bind(this),
    // beforeRemove: this.onBeforeRemove.bind(this),
    // afterRemove: this.onAfterRemove.bind(this),
    // beforeInsert: this.onBeforeInsert.bind(this)
  // };

  onBeforeSave(row: Course) {
    return row
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
