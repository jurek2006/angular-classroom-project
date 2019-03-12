import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact-not-found",
  templateUrl: "./contact-not-found.component.html",
  styleUrls: ["./contact-not-found.component.css"]
})
export class ContactNotFoundComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }
}
