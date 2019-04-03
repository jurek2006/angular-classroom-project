import { Component, OnInit, OnDestroy } from "@angular/core";
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
  private enrolledTypesKeys: string[];

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
        return this.router.navigate(["notFound"], {
          relativeTo: this.route
        });
      }

      if (this.course.signed && Object.keys(this.course.signed).length > 0) {
        // if course has any type (of contacts to enroll - i.e. students/teachers)

        // generate array of course participant types (from course.enrolled property) - wich will be used in template to show tabs
        this.enrolledTypesKeys = Object.keys(this.course.signed);

        if (
          this.course.defaultEnrolledType &&
          this.course.signed[this.course.defaultEnrolledType]
        ) {
          // if there is defined defaultEnrolledType in the course and this type exists
          // redirect to view with tab opened for this type
          return this.router.navigate([this.course.defaultEnrolledType], {
            relativeTo: this.route
          });
        } else {
          // if there is not defined defaultEnrolledType or this property doesn't exist - redirect to first type
          return this.router.navigate([this.enrolledTypesKeys[0]], {
            relativeTo: this.route
          });
        }
      }
    });
  }
}
