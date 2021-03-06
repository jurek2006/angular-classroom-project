import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-course-signin",
  templateUrl: "./course-signin.component.html",
  styleUrls: ["./course-signin.component.css"]
})
export class CourseSigninComponent implements OnInit {
  courseId: string;
  contactId: string;
  contactType: string;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.courseId = params.id;
      this.contactType = params.type;
      this.contactId = params.contactId;
    });
  }

  signIn() {
    const signingStatus = this.coursesService.signInContactToCourse(
      this.courseId,
      this.contactId,
      this.contactType
    );
    this.router.navigate([".."], { relativeTo: this.route });
  }
}
