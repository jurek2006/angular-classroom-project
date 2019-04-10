import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CoursesService } from "../courses.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Course } from "src/app/shared/course.model";
import { DialogService } from "src/app/dialog/dialog.service";

@Component({
  selector: "app-course-edit",
  templateUrl: "./course-edit.component.html",
  styleUrls: ["./course-edit.component.css"]
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;
  editMode = false; // if true we're editing existing course, otherwise creating new one
  deleteMode = false;
  courseToEdit: Course;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.params.id;
    if (courseId) {
      this.courseToEdit = this.coursesService.getCourseById(courseId);
      if (this.courseToEdit) {
        // if id passed in path and there's existing course with this id - set to editMode
        this.editMode = true;
      } else {
        // if id passed but there's is no contact with this id - walk away to notFound component
        this.router.navigate(["..", "notFound"], { relativeTo: this.route });
      }
    }
    this.initForm();
  }

  private initForm() {
    this.courseForm = new FormGroup({
      shortCourseName: new FormControl(
        this.editMode ? this.courseToEdit.shortCourseName : null,
        Validators.required
      ),
      fullCourseName: new FormControl(
        this.editMode ? this.courseToEdit.fullCourseName : null,
        Validators.required
      )
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.coursesService.editCourse(
        this.courseToEdit.id,
        this.courseForm.value.shortCourseName,
        this.courseForm.value.fullCourseName
      );
    } else {
      this.coursesService.addCourse(
        this.courseForm.value.shortCourseName,
        this.courseForm.value.fullCourseName
      );
    }
    this.onCancel();
  }

  onCancel() {
    this.editMode = false;
    this.router.navigate([".."], { relativeTo: this.route });
  }

  onDeleteCourse() {
    this.dialogService.openDialog({
      header: "Confirm course deletion",
      message: `Do you really want to delete the course ${
        this.courseToEdit.shortCourseName
      } (${this.courseToEdit.fullCourseName})?`,
      buttons: [
        {
          text: "No"
        },
        {
          text: "Yes",
          callback: () => {
            this.coursesService.deleteCourseById(this.courseToEdit.id);
            this.router.navigate(["../.."], { relativeTo: this.route });
          }
        }
      ]
    });
  }
}
