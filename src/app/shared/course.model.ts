import { v4 as uuid } from "uuid";

export class Course {
  constructor(
    public id: string,
    public shortCourseName: string,
    public fullCourseName: string,
    public enrolled: { teachers?: uuid[]; students?: uuid[] } = {
      students: [],
      teachers: []
    },
    public defaultEnrolledType?: string
  ) {
    this.id = this.id || uuid();
  }

  get copy(): Course {
    // returns new Course object which is deep copy of this object
    return new Course(
      JSON.parse(JSON.stringify(this.id)),
      this.shortCourseName,
      this.fullCourseName,
      JSON.parse(JSON.stringify(this.enrolled)),
      this.defaultEnrolledType
    );
  }

  get enrollTypes(): string[] {
    return Object.keys(this.enrolled);
  }
}
