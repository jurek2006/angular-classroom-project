import { Injectable } from "@angular/core";
import { Course } from "../shared/courses.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  public coursesChanged = new Subject<Course[]>();

  private courses: Course[] = [
    new Course(
      null,
      "English",
      "English for adults",
      ["2648eee6-2f9e-454a-934a-96fa5e3487be"],
      [
        "6f71d945-9518-4028-b27d-3f27efce1f87",
        "0a8d68a0-1479-4121-8b5e-cf75d3e87c0c"
      ]
    ),
    new Course(null, "Espanol", "Espanol para ninos", null, null),
    new Course(null, "Deutsch", "Deutch DE", null, null)
  ];

  constructor() {}

  public getCourses(): Course[] {
    return JSON.parse(JSON.stringify(this.courses)); // deep copy of courses
  }

  public getCourseById(id: string): Course {
    const foundCourse = this.courses.find((course: Course) => course.id === id);
    return foundCourse ? JSON.parse(JSON.stringify(foundCourse)) : null;
  }

  public addCourse(shortCourseName: string, fullCourseName: string) {
    this.courses = [
      ...this.courses,
      new Course(null, shortCourseName, fullCourseName, null, null)
    ];
    this.coursesChanged.next(this.getCourses());
  }

  public editCourse(
    id: string,
    newShortCourseName: string,
    newFullCourseName: string
  ) {
    this.courses = this.courses.map(
      (course: Course): Course => {
        return course.id === id
          ? new Course(id, newShortCourseName, newFullCourseName, null, null)
          : course;
      }
    );
    this.coursesChanged.next(this.getCourses());
  }

  public deleteCourseById(id: string): boolean {
    this.courses = this.courses.filter((course: Course) => {
      return course.id !== id;
    });
    this.coursesChanged.next(this.getCourses());
    return true;
  }
}
