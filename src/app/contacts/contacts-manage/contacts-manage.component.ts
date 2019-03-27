import { Component, OnInit, OnDestroy } from "@angular/core";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "../contacts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contacts-manage",
  templateUrl: "./contacts-manage.component.html",
  styleUrls: ["./contacts-manage.component.css"]
})
export class ContactsManageComponent implements OnInit, OnDestroy {
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
