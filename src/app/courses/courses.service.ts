import { Injectable } from "@angular/core";
import { Course } from "../shared/course.model";
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
      students: [
        "6f71d945-9518-4028-b27d-3f27efce1f87",
        "0a8d68a0-1479-4121-8b5e-cf75d3e87c0c"
      ],
      teachers: ["2648eee6-2f9e-454a-934a-96fa5e3487be"]
    }),
    new Course(null, "Espanol", "Espanol para ninos", {
      teachers: ["2648eee6-2f9e-454a-934a-96fa5e3487be"]
    }),
    new Course(null, "Deutsch", "Deutch DE"),
    new Course(
      null,
      "Hindi",
      "Hindi for adults",
      {
        students: [
          "6f71d945-9518-4028-b27d-3f27efce1f87",
          "0a8d68a0-1479-4121-8b5e-cf75d3e87c0c"
        ],
        teachers: ["2648eee6-2f9e-454a-934a-96fa5e3487be"]
      },
      "teachers"
    )
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
    return foundCourse ? foundCourse.copy : null;
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
                course.enrolled
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

  /* Enrolls contact in course (in type defined in enrollType) i.e. enroll contact in course as a teacher/student */
  public enrollContactInCourse(
    courseId: string,
    contactId: string,
    enrollType: string
  ): Status {
    const foundCourse = this.courses.find(
      (course: Course) => course.id === courseId
    );

    if (foundCourse.enrolled[enrollType]) {
      // if there is property enrollType in course.enrolled (e.g. teachers or students) to enroll contact

      // contacts's data needed here for messages (as enrolled item is only contact id)
      const contactData = this.contactsService.getContactById(contactId);

      // check if contact have been already enrolled to teachers/students for the course
      if (
        foundCourse.enrolled[enrollType].find(enrolledContact => {
          return enrolledContact === contactId;
        })
      ) {
        this.messageService.showMessage(
          `${contactData.firstName} ${
            contactData.lastName
          } is already enrolled in the course ${foundCourse.shortCourseName}`,
          "ok",
          "warning"
        );
        return { statusOk: false };
      } else {
        // if contact hasn't been enrolled yet - enroll
        foundCourse.enrolled[enrollType] = [
          ...foundCourse.enrolled[enrollType],
          contactId
        ];
        this.courseChanged.next(foundCourse);
        this.messageService.showMessage(
          `${contactData.firstName} ${
            contactData.lastName
          } enrolled in the course ${foundCourse.shortCourseName}`,
          "ok"
        );
        return {
          statusOk: true
        };
      }
    } else {
      // error - there is no property enrollType (i.e. students or teachers)
      console.error(
        `There is no '${enrollType}' type in course ${foundCourse}.enrolled object. See existing properties: `,
        foundCourse.enrolled
      );

      this.messageService.showMessage(
        `There is no '${enrollType}' type in courses enrolled object`,
        "ok",
        "error"
      );

      return { statusOk: false };
    }
  }

  public disenrollContactFromCourse(
    courseId: string,
    contactId: string,
    enrollType: string
  ): Status {
    console.log(`Disenroll ${contactId} from ${courseId} type ${enrollType}`);

    const foundCourse = this.courses.find(
      (course: Course) => course.id === courseId
    );

    let ifDisenrolled = false; // flag contains status if contact was disentrolled (if it will get true - operation successfull)

    // filter out contactId from enrolled[enrollType]
    foundCourse.enrolled[enrollType] = foundCourse.enrolled[enrollType].filter(
      (enrolledContact: uuid): uuid => {
        if (enrolledContact === contactId) {
          // found enrolledContact to get rid of
          ifDisenrolled = true; // set flag - means disenrolled contact
          return false;
        } else {
          return true;
        }
      }
    );

    // contacts's data needed here for messages (as enrolled item is only contact id)
    const contactData = this.contactsService.getContactById(contactId);

    if (ifDisenrolled) {
      // when disenrolled - operation succeeded

      this.courseChanged.next(foundCourse);
      this.messageService.showMessage(
        `${contactData.firstName} ${
          contactData.lastName
        } disenrolled from the course ${foundCourse.shortCourseName}`,
        "ok"
      );

      return {
        statusOk: true
      };
    } else {
      // when not disenrolled anyone

      console.error(
        `Could not disenroll ${contactData.firstName} ${
          contactData.lastName
        } from course ${foundCourse.shortCourseName} - type ${enrollType}`
      );

      this.messageService.showMessage(
        `Could not disenroll ${contactData.firstName} ${
          contactData.lastName
        } from course ${foundCourse.shortCourseName} - type ${enrollType}`,
        "ok",
        "error"
      );

      return { statusOk: false };
    }
  }
}
