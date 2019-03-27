import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";

@Component({
  selector: "app-contacts-list-item",
  templateUrl: "./contacts-list-item.component.html",
  styleUrls: ["./contacts-list-item.component.css"]
})
export class ContactsListItemComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit() {}
}
