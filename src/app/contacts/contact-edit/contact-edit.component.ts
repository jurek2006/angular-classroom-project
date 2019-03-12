import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Contact } from "src/app/shared/contact.model";
import { FormGroup, FormControl } from "@angular/forms";
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

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactsService.addContact(
      this.contactForm.value.firstName,
      this.contactForm.value.lastName
    );
    this.onCancel();
  }

  onCancel() {
    this.router.navigate([".."], { relativeTo: this.route });
  }
}
