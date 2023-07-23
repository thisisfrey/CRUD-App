import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

// Snackbar to replace alerts in code
// ? why snackbar in core service and not as component
// Inject CoreService anywhere to use it
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string = 'Ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }
}
