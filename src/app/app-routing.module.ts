import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/contacts",
    pathMatch: "full"
  },
  {
    path: "contacts",
    component: ContactsComponent,
    children: [{ path: ":id", component: ContactDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
