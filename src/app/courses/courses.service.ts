import { Injectable } from "@angular/core";
import { Course } from "../shared/courses.model";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private courses: Course[] = [
    new Course(null, "English", "English for adults", null, null),
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
}
