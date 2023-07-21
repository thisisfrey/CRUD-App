import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-crud-app';

  constructor(private _dialog: MatDialog) {}

  openAddEditEmployeeForm() {
    this._dialog.open(AddEditEmployeeComponent);
  }
}
