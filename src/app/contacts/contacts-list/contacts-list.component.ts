import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor() {}

  ngOnInit() {
    this.contacts = [
      new Contact(null, "Jurek", "Skowron"),
      new Contact(null, "Franek", "Dolas")
    ];
    console.log(this.contacts);
  }
}
