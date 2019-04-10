import { Component } from "@angular/core";
import { DialogService } from "../dialog/dialog.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent {
  constructor(private dialogService: DialogService) {}

  openDialog(): void {
    this.dialogService.openDialog({
      message: "Are you sure?"
    });
  }
}
