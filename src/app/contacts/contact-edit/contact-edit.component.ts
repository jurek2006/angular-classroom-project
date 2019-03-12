import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Contact } from "src/app/shared/contact.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact-edit",
  templateUrl: "./contact-edit.component.html",
  styleUrls: ["./contact-edit.component.css"]
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  contactForm: FormGroup;
  editMode = false; // if true we're editing existing contact, otherwise creating new one
  contactToEdit: Contact;

  ngOnInit() {
    const contactId = this.route.snapshot.params.id;
    if (contactId) {
      // if id passed in path we set editMode and get editing contact's data
      this.editMode = true;
      this.contactToEdit = this.contactsService.getContactById(contactId);
    }
    this.initForm();
  }

  private initForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(
        this.editMode ? this.contactToEdit.firstName : null,
        Validators.required
      ),
      lastName: new FormControl(
        this.editMode ? this.contactToEdit.lastName : null,
        Validators.required
      )
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.contactsService.editContact(
        this.contactToEdit.id,
        this.contactForm.value.firstName,
        this.contactForm.value.lastName
      );
    } else {
      this.contactsService.addContact(
        this.contactForm.value.firstName,
        this.contactForm.value.lastName
      );
    }
    this.onCancel();
  }

  onCancel() {
    this.editMode = false;
    this.router.navigate([".."], { relativeTo: this.route });
  }
}
