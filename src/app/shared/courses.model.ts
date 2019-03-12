import { v4 as uuid } from "uuid";

export class Course {
  constructor(
    public id: string,
    public shortCourseName: string,
    public fullCourseName: string,
    public teachersIds: string[],
    public studentIds: string[]
  ) {
    this.id = this.id || uuid();
  }
}