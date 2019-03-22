import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contact } from "src/app/shared/contact.model";
import { ContactsService } from "../../contacts.service";
import { MatSnackBar } from "@angular/material";

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
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onConfirmDelete() {
    const operationStatus = this.contactsService.deleteContactById(
      this.contact.id
    );
    if (operationStatus.status) {
      this.snackBar.open(operationStatus.msg, "ok");
    } else {
      this.snackBar.open(operationStatus.msg, "X", {
        panelClass: "snackbar-error"
      });
    }
    this.router.navigate(["../.."], { relativeTo: this.route });
  }

  onCancel() {
    this.cancelDelete.emit();
  }
}
