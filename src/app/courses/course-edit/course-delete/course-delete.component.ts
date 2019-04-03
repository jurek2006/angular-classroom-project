import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Course } from "src/app/shared/course.model";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-course-delete",
  templateUrl: "./course-delete.component.html",
  styleUrls: ["./course-delete.component.css"]
})
export class CourseDeleteComponent implements OnInit {
  @Input() course: Course;
  @Output() cancelDelete = new EventEmitter();

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onConfirmDelete() {
    this.coursesService.deleteCourseById(this.course.id);
    this.router.navigate(["../.."], { relativeTo: this.route });
  }

  onCancel() {
    this.cancelDelete.emit();
  }
}
