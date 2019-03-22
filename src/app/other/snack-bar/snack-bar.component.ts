// example component to call snack bar
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-snack-bar",
  templateUrl: "./snack-bar.component.html",
  styleUrls: ["./snack-bar.component.css"]
})
export class SnackBarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open("message", "ok", {
      // duration: 2000,
      panelClass: "snackbar-warning"
    });
  }

  ngOnInit() {}
}
