import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-course-signin-pick-contact",
  templateUrl: "./course-signin-pick-contact.component.html",
  styleUrls: ["./course-signin-pick-contact.component.css"]
})
export class CourseSigninPickContactComponent implements OnInit {
  contactType: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.contactType = params.type;
    });
  }
}
