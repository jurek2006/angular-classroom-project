import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";

@Component({
  selector: "app-course-contacts",
  templateUrl: "./course-contacts.component.html",
  styleUrls: ["./course-contacts.component.css"]
})
export class CourseContactsComponent implements OnInit, OnChanges {
  @Input() type: string; // object contacts property name to get data
  @Input() title: string;
  @Input() contacts: Contact[];
  contactsOfGivenType: Contact[];

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    if (!this.contacts[this.type]) {
      // if there is no proper property on object show warning
      // (as template doesn't show because of ngIf statement)
      console.warn(
        `Not showing course contacts. There is no property '${
          this.type
        }' on contacts object. See existing properties: `,
        this.contacts
      );
    }
  }
}
