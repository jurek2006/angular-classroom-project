// service for showing message in snack-bar
// status of the message can be set to success, warning, error (or leaving empty - default)
// styles for corresponding statuses defined globally in styles.css

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, button: string, status?: any) {
    this.snackBar.open(message, button, {
      panelClass: status ? `snackbar-${status}` : ""
    });

    if (status === "error") {
      console.error("Message: ", message);
    } else if (status === "warning") {
      console.warn("Message: ", message);
    } else {
      console.log("Message ", message);
    }
  }
}
