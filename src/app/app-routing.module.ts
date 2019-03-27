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
import { TestComponent } from "./test/test.component";
import { ContactsManageComponent } from "./contacts/contacts-manage/contacts-manage.component";
import { CourseSigninComponent } from "./courses/course-detail/course-signin/course-signin.component";
import { ContactsListComponent } from "./shared/contacts-list/contacts-list.component";
import { CourseSigninPickContactComponent } from "./courses/course-detail/course-signin/course-signin-pick-contact/course-signin-pick-contact.component";

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
      {
        path: ":id",
        component: CourseDetailComponent,
        children: [
          { path: "signin/:type", component: CourseSigninPickContactComponent },
          { path: "signin/:type/:contactId", component: CourseSigninComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: "always" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
