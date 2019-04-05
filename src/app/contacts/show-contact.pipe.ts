/* Pipe used to show contacts data - gets contact id and shows i.e. firstName, LastName */
import { Pipe, PipeTransform } from "@angular/core";
import { ContactsService } from "./contacts.service";

@Pipe({
  name: "showContact"
})
export class ShowContactPipe implements PipeTransform {
  constructor(private contactsService: ContactsService) {}

  transform(contactId: string): string {
    const contactData = this.contactsService.getContactById(contactId);
    return `${contactData.firstName} ${contactData.lastName}`;
  }
}
