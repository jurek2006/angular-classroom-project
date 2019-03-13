import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CoursesService } from "../courses.service";
import { Course } from "src/app/shared/courses.model";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "src/app/contacts/contacts.service";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  private course: Course;
  private teachers: Contact[];
  private students: Contact[];
  private id: string;

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

      if (this.course && this.course.teachersIds) {
        this.teachers = this.course.teachersIds.map(teacherId => {
          return this.contactsService.getContactById(teacherId);
        });
      } else {
        this.teachers = [];
      }
      if (this.course && this.course.studentIds) {
        this.students = this.course.studentIds.map(studentId => {
          return this.contactsService.getContactById(studentId);
        });
      } else {
        this.students = [];
      }
      if (!this.course) {
        this.router.navigate(["notFound"], {
          relativeTo: this.route
        });
      }
    });
  }
}
