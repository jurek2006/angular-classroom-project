import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Contact } from "src/app/shared/contact.model";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contacts-manage",
  templateUrl: "./contacts-manage.component.html",
  styleUrls: ["./contacts-manage.component.css"]
})
export class ContactsManageComponent implements OnInit {
  private contacts: Contact[];
  private subscription: Subscription;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  onContactSelected(selectedContact: Contact): void {
    this.router.navigate([selectedContact.id], { relativeTo: this.route });
  }
}
