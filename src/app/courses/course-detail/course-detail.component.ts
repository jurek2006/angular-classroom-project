import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CoursesService } from "../courses.service";
import { Course } from "src/app/shared/courses.model";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  private course: Course;
  private id: string;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.course = this.coursesService.getCourseById(this.id);
      if (!this.course) {
        this.router.navigate(["notFound"], {
          relativeTo: this.route
        });
      }
    });
  }
}
