import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/contacts",
    pathMatch: "full"
  },
  {
    path: "contacts",
    component: ContactsComponent,
    children: [
      { path: "new", component: ContactEditComponent },
      { path: ":id", component: ContactDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
