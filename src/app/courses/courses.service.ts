import { Injectable } from "@angular/core";
import { Course } from "../shared/courses.model";
import { Subject } from "rxjs";
import { ContactsService } from "../contacts/contacts.service";
import { MessageService } from "../shared/message.service";
import { Status } from "../shared/status";

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

  constructor(
    private contactsService: ContactsService,
    private messageService: MessageService
  ) {}

  public getCourses(): Course[] {
    return JSON.parse(JSON.stringify(this.courses)); // deep copy of courses
  }

  public getCourseById(id: string): Course {
    const foundCourse = this.courses.find((course: Course) => course.id === id);
    return foundCourse ? JSON.parse(JSON.stringify(foundCourse)) : null;
  }

  public addCourse(shortCourseName: string, fullCourseName: string): Status {
    this.courses = [
      ...this.courses,
      new Course(null, shortCourseName, fullCourseName)
    ];
    this.coursesChanged.next(this.getCourses());
    this.messageService.showMessage(`Course ${shortCourseName} added`, "OK");
    return {
      statusOk: true
    };
  }

  public editCourse(
    id: string,
    newShortCourseName: string,
    newFullCourseName: string
  ): Status {
    if (this.getCourseById(id)) {
      // if found course with given id
      this.courses = this.courses.map(
        (course: Course): Course => {
          return course.id === id
            ? new Course(
                id,
                newShortCourseName,
                newFullCourseName,
                course.signed
              )
            : course;
        }
      );
      this.coursesChanged.next(this.getCourses());
      this.messageService.showMessage(
        `Course ${newShortCourseName} updated`,
        "OK"
      );
      return {
        statusOk: true
      };
    } else {
      {
        this.messageService.showMessage(
          `Course with id ${id} does not exist`,
          "OK",
          "error"
        );
        return {
          statusOk: false
        };
      }
    }
  }

  public deleteCourseById(id: string): Status {
    // check if course exist
    const courseToDelete = this.getCourseById(id);

    if (courseToDelete) {
      this.courses = this.courses.filter((course: Course) => {
        return course.id !== id;
      });
      this.coursesChanged.next(this.getCourses());
      this.messageService.showMessage(
        `Course ${courseToDelete.shortCourseName} deleted`,
        "ok"
      );
      return {
        statusOk: true
      };
    } else {
      // if course with id doesn't exist
      this.messageService.showMessage(
        `Course with id ${id} does not exist`,
        "ok",
        "error"
      );
      return {
        statusOk: false
      };
    }
  }

  public signInContactToCourse(
    courseId: string,
    contactId: string,
    contactType: string
  ): Status {
    const foundCourse = this.courses.find(
      (course: Course) => course.id === courseId
    );

    if (foundCourse.signed[contactType]) {
      // if there is property contactType in course.signed (e.g. teachers or students) to assign contact

      // contacts's data needed here for fail message (when contact already signed in)
      const contactToSignIn = this.contactsService.getContactById(contactId);

      // check if contact have been already assigned to teachers/students for the course
      if (
        foundCourse.signed[contactType].find(contact => {
          return contact.id === contactId;
        })
      ) {
        this.messageService.showMessage(
          `${contactToSignIn.firstName} ${
            contactToSignIn.lastName
          } is already signed in to the course ${foundCourse.shortCourseName}`,
          "ok",
          "warning"
        );
        return { statusOk: false };
      } else {
        // if contact hasn't been assigned yet - sign in
        foundCourse.signed[contactType] = [
          ...foundCourse.signed[contactType],
          contactToSignIn
        ];
        this.courseChanged.next();
        this.messageService.showMessage(
          `${contactToSignIn.firstName} ${
            contactToSignIn.lastName
          } signed in to the course ${foundCourse.shortCourseName}`,
          "ok"
        );
        return {
          statusOk: true
        };
      }
    } else {
      // error - there is no property contactType (i.e. students or teachers)
      console.error(
        `There is no '${contactType}' type in course ${foundCourse} signed object. See existing properties: `,
        foundCourse.signed
      );

      this.messageService.showMessage(
        `There is no '${contactType}' type in courses signin object`,
        "ok",
        "error"
      );

      return { statusOk: false };
    }
  }
}
