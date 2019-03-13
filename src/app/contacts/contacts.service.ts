import { Injectable } from "@angular/core";
import { Contact } from "../shared/contact.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  public contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[] = [
    new Contact("abd763ac-e06b-42fd-bd04-1422fa1cbfbe", "Jurek", "Skowron"),
    new Contact("b37f0f09-eae7-4347-aef4-b1a8950989d7", "Franek", "Dolas"),
    new Contact(
      "08abd024-ca08-4c6d-ab94-812e0889aa4f",
      "Grzegorz",
      "Brzęczyszczykiewicz"
    ),
    new Contact("2648eee6-2f9e-454a-934a-96fa5e3487be", "Adam", "Małysz"),
    new Contact("6f71d945-9518-4028-b27d-3f27efce1f87", "Kamil", "Stoch"),
    new Contact("0a8d68a0-1479-4121-8b5e-cf75d3e87c0c", "Dawid", "Kubacki")
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
