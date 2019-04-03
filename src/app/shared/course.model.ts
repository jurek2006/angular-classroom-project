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

  public getEnrollTypes(): string[] {
    return Object.keys(this.enrolled);
  }

  public getDeepCopy(): Course {
    return new Course(
      JSON.parse(JSON.stringify(this.id)),
      this.shortCourseName,
      this.fullCourseName,
      JSON.parse(JSON.stringify(this.enrolled)),
      this.defaultEnrolledType
    );
  }
}
