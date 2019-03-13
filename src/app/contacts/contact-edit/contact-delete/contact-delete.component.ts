import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "../../contacts.service";

@Component({
  selector: "app-contact-delete",
  templateUrl: "./contact-delete.component.html",
  styleUrls: ["./contact-delete.component.css"]
})
export class ContactDeleteComponent implements OnInit {
  @Input() contact: Contact;
  @Output() cancelDelete = new EventEmitter();

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onConfirmDelete() {
    this.contactsService.deleteContactById(this.contact.id);
    this.router.navigate(["../.."], { relativeTo: this.route });
  }

  onCancel() {
    this.cancelDelete.emit();
  }
}
