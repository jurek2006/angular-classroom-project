import { Component, OnInit, Input, OnChanges, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CoursesService } from "../../courses.service";
import { Course } from "src/app/shared/courses.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-course-contacts",
  templateUrl: "./course-contacts.component.html",
  styleUrls: ["./course-contacts.component.css"]
})
export class CourseContactsComponent implements OnInit, OnDestroy {
  private id: string;
  private type: string;
  private course: Course;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.type = params.type;
      this.course = this.coursesService.getCourseById(this.id);
    });
    this.subscription = this.coursesService.courseChanged.subscribe(
      (course: Course) => {
        this.course = course;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
