import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";

@Component({
  selector: "app-course-contacts",
  templateUrl: "./course-contacts.component.html",
  styleUrls: ["./course-contacts.component.css"]
})
export class CourseContactsComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() contacts: Contact[];

  constructor() {}

  ngOnInit() {}
}
