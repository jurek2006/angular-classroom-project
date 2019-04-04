import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsManageComponent } from "./contacts/contacts-manage/contacts-manage.component";
import { ContactsListItemComponent } from "./shared/contacts-list/contacts-list-item/contacts-list-item.component";
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
import { CourseContactsComponent } from "./courses/course-detail/course-contacts/course-contacts.component";
import { TestComponent } from "./test/test.component";
import { ContactsListComponent } from "./shared/contacts-list/contacts-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material/snack-bar";
import { SnackBarComponent } from "./other/snack-bar/snack-bar.component";
import { MatTabsModule } from "@angular/material/tabs";
import { CourseEnrollComponent } from "./courses/course-detail/course-contacts/course-enroll/course-enroll.component";
import { ShowContactPipe } from "./contacts/show-contact.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsManageComponent,
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
    SnackBarComponent,
    ContactsListComponent,
    CourseEnrollComponent,
    ShowContactPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatChipsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
