import { Injectable } from "@angular/core";
import { Contact } from "../shared/contact.model";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
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
    // return JSON.parse(
    //   JSON.stringify(
    return this.contacts.find((contact: Contact) => contact.id === id);
    //   )
    // );
  }
}
