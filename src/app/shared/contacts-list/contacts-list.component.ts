import { Component, OnInit, OnDestroy } from "@angular/core";
import { ContactsService } from "src/app/contacts/contacts.service";
import { Contact } from "../contact.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
