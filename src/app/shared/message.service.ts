import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, button: string, status?: any) {
    console.log("Message ", message);
    this.snackBar.open(message, button);
  }
}

// if (operationStatus.status) {
//   this.snackBar.open(operationStatus.msg, "ok");
// } else {
//   this.snackBar.open(operationStatus.msg, "X", {
//     panelClass: "snackbar-error"
//   });
// }
