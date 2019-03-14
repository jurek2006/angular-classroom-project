import { Injectable } from "@angular/core";
import { Course } from "../shared/courses.model";
import { Subject } from "rxjs";
import { ContactsService } from "../contacts/contacts.service";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  public coursesChanged = new Subject<Course[]>();
  public courseChanged = new Subject<Course>();

  private courses: Course[] = [
    new Course(null, "English", "English for adults", {
      teachers: [
        this.contactsService.getContactById(
          "2648eee6-2f9e-454a-934a-96fa5e3487be"
        )
      ],
      students: [
        this.contactsService.getContactById(
          "6f71d945-9518-4028-b27d-3f27efce1f87"
        ),
        this.contactsService.getContactById(
          "0a8d68a0-1479-4121-8b5e-cf75d3e87c0c"
        )
      ]
    }),
    new Course(null, "Espanol", "Espanol para ninos"),
    new Course(null, "Deutsch", "Deutch DE")
  ];

  constructor(private contactsService: ContactsService) {}

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
      new Course(null, shortCourseName, fullCourseName)
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
          ? new Course(id, newShortCourseName, newFullCourseName, course.signed)
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

  public signInContactToCourse(
    courseId: string,
    contactId: string,
    contactType: string
  ) {
    const foundCourse = this.courses.find(
      (course: Course) => course.id === courseId
    );

    if (foundCourse.signed[contactType]) {
      // check if contact haven't been already assigned to teachers/students for the course
      if (
        foundCourse.signed[contactType].find(contact => {
          return contact.id === contactId;
        })
      ) {
        console.log("Contact is already signed to the course");
      } else {
        foundCourse.signed[contactType] = [
          ...foundCourse.signed[contactType],
          this.contactsService.getContactById(contactId)
        ];
        this.courseChanged.next();
      }
    } else {
      console.log(`There is no '${contactType}' type in courses signin object`);
    }
  }
}
