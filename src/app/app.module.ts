import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsListComponent } from "./contacts/contacts-list/contacts-list.component";
import { ContactsListItemComponent } from "./contacts/contacts-list/contacts-list-item/contacts-list-item.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsListItemComponent,
    ContactDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
