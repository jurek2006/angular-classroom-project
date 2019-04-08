import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Contact } from "../../../shared/contact.model";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.css"]
})
export class ContactsListComponent {
  @Input() contacts: Contact;
  @Output() selectedContact = new EventEmitter<Contact>();

  onSelect(selectedItem: Contact) {
    this.selectedContact.emit(selectedItem);
  }
}
