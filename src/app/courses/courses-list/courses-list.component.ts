import { Component, OnInit, OnDestroy } from "@angular/core";
import { CoursesService } from "../courses.service";
import { Course } from "src/app/shared/courses.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.css"]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  private courses: Course[];
  private subscription: Subscription;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.subscription = this.coursesService.coursesChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
