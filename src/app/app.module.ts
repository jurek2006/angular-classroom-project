import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsListComponent } from "./contacts/contacts-list/contacts-list.component";
import { ContactsListItemComponent } from "./contacts/contacts-list/contacts-list-item/contacts-list-item.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactNotFoundComponent } from './contacts/contact-not-found/contact-not-found.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsListItemComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactNotFoundComponent,
    ContactDeleteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
