import { v4 as uuid } from "uuid";
import { Contact } from "./contact.model";

export class Course {
  constructor(
    public id: string,
    public shortCourseName: string,
    public fullCourseName: string,
    public signed: { teachers: uuid[]; students: uuid[] } = {
      students: [],
      teachers: []
    },
    public defaultEnrolledType?: string
  ) {
    this.id = this.id || uuid();
  }
}
