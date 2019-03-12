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
    const foundContact = this.contacts.find(
      (contact: Contact) => contact.id === id
    );
    return foundContact ? JSON.parse(JSON.stringify(foundContact)) : null;
  }

  public addContact(firstName: string, lastName: string) {
    this.contacts = [...this.contacts, new Contact(null, firstName, lastName)];
    this.contactsChanged.next(this.getContacts());
  }

  public editContact(id: string, newFirstName: string, newLastName: string) {
    this.contacts = this.contacts.map(
      (contact: Contact): Contact => {
        return contact.id === id
          ? new Contact(id, newFirstName, newLastName)
          : contact;
      }
    );
    this.contactsChanged.next(this.getContacts());
  }

  public deleteContactById(id: string): boolean {
    this.contacts = this.contacts.filter((contact: Contact) => {
      return contact.id !== id;
    });
    this.contactsChanged.next(this.getContacts());
    return true;
  }
}
