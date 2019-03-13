import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactNotFoundComponent } from "./contacts/contact-not-found/contact-not-found.component";
import { CoursesComponent } from "./courses/courses.component";
import { IndexComponent } from "./index/index.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CourseNotFoundComponent } from "./courses/course-not-found/course-not-found.component";
import { CourseEditComponent } from "./courses/course-edit/course-edit.component";

const routes: Routes = [
  {
    path: "",
    // redirectTo: "/contacts",
    component: IndexComponent,
    pathMatch: "full"
  },
  {
    path: "contacts",
    component: ContactsComponent,
    children: [
      { path: "new", component: ContactEditComponent },
      { path: ":id/notFound", component: ContactNotFoundComponent },
      { path: ":id/edit", component: ContactEditComponent },
      { path: ":id", component: ContactDetailComponent }
    ]
  },
  {
    path: "courses",
    component: CoursesComponent,
    children: [
      { path: "new", component: CourseEditComponent },
      { path: ":id/notFound", component: CourseNotFoundComponent },
      { path: ":id/edit", component: CourseEditComponent },
      { path: ":id", component: CourseDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
