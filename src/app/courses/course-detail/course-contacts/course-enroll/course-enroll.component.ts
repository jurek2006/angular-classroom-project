import { Component, OnInit, Input } from "@angular/core";
import { ContactsService } from "src/app/contacts/contacts.service";
import { Contact } from "src/app/shared/contact.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Course } from "src/app/shared/courses.model";
import { CoursesService } from "src/app/courses/courses.service";

@Component({
  selector: "app-course-enroll",
  templateUrl: "./course-enroll.component.html",
  styleUrls: ["./course-enroll.component.css"]
})
export class CourseEnrollComponent implements OnInit {
  @Input() type: string;
  @Input() course: Course;
  private contacts: Contact[];

  constructor(
    private contactsService: ContactsService,
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  onContactSelected(selectedContact: Contact): void {
    // enrolls selectedContact to the course as type (i.e. student, teacher)
    this.courseService.signInContactToCourse(
      this.course.id,
      selectedContact.id,
      this.type
    );
  }
}