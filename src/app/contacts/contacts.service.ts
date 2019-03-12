import { Injectable } from "@angular/core";
import { Contact } from "../shared/contact.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  public contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[] = [
    new Contact(null, "Jurek", "Skowron"),
    new Contact(null, "Franek", "Dolas"),
    new Contact(null, "Grzegorz", "Brzęczyszczykiewicz")
  ];
  constructor() {}

  public getContacts(): Contact[] {
    return JSON.parse(JSON.stringify(this.contacts)); // deep copy of contacts
  }

  public getContactById(id: string): Contact {
    return JSON.parse(
      JSON.stringify(
        this.contacts.find((contact: Contact) => contact.id === id)
      )
    );
  }

  public addContact(firstName: string, lastName: string) {
    this.contacts = [...this.contacts, new Contact(null, firstName, lastName)];
    this.contactsChanged.next(this.getContacts());
  }
}
