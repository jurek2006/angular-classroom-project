import { v4 as uuid } from "uuid";

export class Contact {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string
  ) {
    this.id = this.id || uuid();
  }
}
