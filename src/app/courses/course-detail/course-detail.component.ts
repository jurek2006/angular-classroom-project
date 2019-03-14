import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CoursesService } from "../courses.service";
import { Course } from "src/app/shared/courses.model";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "src/app/contacts/contacts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  private course: Course;
  // private teachers: Contact[];
  // private students: Contact[];
  private id: string;
  private subscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private contactsService: ContactsService,
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

      this.subscription = this.coursesService.courseChanged.subscribe(() => {
        // when course was changed update its data
        this.course = this.coursesService.getCourseById(this.id);
      });
    });
  }
}
