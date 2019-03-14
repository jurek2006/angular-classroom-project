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
import { ContactNotFoundComponent } from "./contacts/contact-not-found/contact-not-found.component";
import { ContactDeleteComponent } from "./contacts/contact-edit/contact-delete/contact-delete.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesListComponent } from "./courses/courses-list/courses-list.component";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import { CoursesListItemComponent } from "./courses/courses-list/courses-list-item/courses-list-item.component";
import { CourseEditComponent } from "./courses/course-edit/course-edit.component";
import { CourseNotFoundComponent } from "./courses/course-not-found/course-not-found.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CourseDeleteComponent } from "./courses/course-edit/course-delete/course-delete.component";
import { CourseContactsComponent } from './courses/course-detail/course-contacts/course-contacts.component';
import { TestComponent } from './test/test.component';
import { CourseSigninComponent } from './courses/course-detail/course-signin/course-signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsListItemComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactNotFoundComponent,
    ContactDeleteComponent,
    CoursesComponent,
    CoursesListComponent,
    HeaderComponent,
    IndexComponent,
    CoursesListItemComponent,
    CourseEditComponent,
    CourseNotFoundComponent,
    CourseDetailComponent,
    CourseDeleteComponent,
    CourseContactsComponent,
    TestComponent,
    CourseSigninComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
