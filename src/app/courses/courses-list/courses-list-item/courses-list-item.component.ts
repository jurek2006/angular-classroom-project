import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/app/shared/courses.model";

@Component({
  selector: "app-courses-list-item",
  templateUrl: "./courses-list-item.component.html",
  styleUrls: ["./courses-list-item.component.css"]
})
export class CoursesListItemComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit() {}
}
