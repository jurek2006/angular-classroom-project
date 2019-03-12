import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Contact } from "src/app/shared/contact.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styleUrls: ["./contact-detail.component.css"]
})
export class ContactDetailComponent implements OnInit {
  private contact: Contact;
  private id: string;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.contact = this.contactsService.getContactById(this.id);
      if (!this.contact) {
        this.router.navigate(["notFound"], {
          relativeTo: this.route
        });
      }
    });
  }
}
