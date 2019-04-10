import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsManageComponent } from "./contacts/contacts-manage/contacts-manage.component";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactNotFoundComponent } from "./contacts/contact-not-found/contact-not-found.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesListComponent } from "./courses/courses-list/courses-list.component";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import { CourseEditComponent } from "./courses/course-edit/course-edit.component";
import { CourseNotFoundComponent } from "./courses/course-not-found/course-not-found.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CourseContactsComponent } from "./courses/course-detail/course-contacts/course-contacts.component";
import { CourseEnrollComponent } from "./courses/course-detail/course-contacts/course-enroll/course-enroll.component";
import { TestComponent } from "./test/test.component";
import { ContactsListComponent } from "./contacts/contacts-manage/contacts-list/contacts-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { ShowContactPipe } from "./contacts/show-contact.pipe";
import "hammerjs";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsManageComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactNotFoundComponent,
    CoursesComponent,
    CoursesListComponent,
    HeaderComponent,
    IndexComponent,
    CourseEditComponent,
    CourseNotFoundComponent,
    CourseDetailComponent,
    CourseContactsComponent,
    TestComponent,
    ContactsListComponent,
    CourseEnrollComponent,
    ShowContactPipe,
    DialogComponent
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
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
