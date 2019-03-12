import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "../contacts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit {
  private contacts: Contact[];
  private subscription: Subscription;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.subscription = this.contactsService.contactsChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
  }
}
