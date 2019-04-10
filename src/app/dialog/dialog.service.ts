/*
  * DIALOG SERVICE WORKING WITH DIALOG COMPONENT

  It allows other components to easly show dialog (defined in DialogComponent)
  and run passed callback functions when particular button was clicked

  USE
  To use dialog inject this service to some component:

    // constructor(private dialogService: DialogService) {}

  And then you can use openDialog() method in component:

    // this.dialogService.openDialog({
    //   message: "Dialog message",
    //   [optional: ]
    //   header: "Confirm contact deletion",
    //   [optional: if no buttons then there will be default "ok" button]
    //   buttons: [
    //     {
    //       text: "No"
    //     },
    //     {
    //       text: "Yes",
    //       callback: () => {
    //         this.contactsService.deleteContactById(this.contactToEdit.id);
    //         this.router.navigate(["../.."], { relativeTo: this.route });
    //       }
    //     }
    //   ],
    //   [optional: options property is optional as well its child-properties
    //    it allows to pass configurations like width, height (and more from MatDialogConfig)
    //    (https://material.angular.io/components/dialog/api#MatDialogConfig)]
    //   options: {
    //     disableClose: false,
    //     restoreFocus: false,
    //     width: "250px",
    //     height: "250px"
    //   }
    // });
*/

import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "./dialog.component";

export interface DialogParams {
  message: string;
  buttons?: Buttons[];
  header?: string;
  options?: MatDialogConfig;
}

export interface Buttons {
  text: string;
  callback?: () => void;
}

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(param: DialogParams): void {
    // restructure object given to pass
    // options (like width, maxWidth etc. from MatDialogConfig )and
    // dialog data (message, header?, buttons?)
    const { options, ...data } = param;

    // open dialog
    const dialogRef = this.dialog.open(DialogComponent, {
      ...options,
      data
    });

    dialogRef.afterClosed().subscribe(callback => {
      if (callback) {
        // run callback only if defined
        callback();
      }
    });
  }
}
