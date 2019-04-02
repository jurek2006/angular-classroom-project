/* Pipe used to show contacts data - gets contact id and shows i.e. firstName, LastName */
import { Pipe, PipeTransform } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Contact } from "../shared/contact.model";
import { ContactsService } from "./contacts.service";

@Pipe({
  name: "showContact"
})
export class ShowContactPipe implements PipeTransform {
  constructor(private contactsService: ContactsService) {}

  transform(contactId: uuid): string {
    const contactData = this.contactsService.getContactById(contactId);
    return `${contactData.firstName} ${contactData.lastName}`;
  }
}
