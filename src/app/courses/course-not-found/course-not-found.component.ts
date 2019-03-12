import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-not-found",
  templateUrl: "./course-not-found.component.html",
  styleUrls: ["./course-not-found.component.css"]
})
export class CourseNotFoundComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }
}
