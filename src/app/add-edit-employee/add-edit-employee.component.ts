import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'],
})
export class AddEditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  education: string[] = ['Intermediate', 'Diploma', 'Graduate', 'Other'];

  // inject services into constructor
  // privates with underscore in name
  // EmployeeService: Implements server connection to db.json
  // DialogRef: Type is the classname
  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _dialogRef: MatDialogRef<AddEditEmployeeComponent>,
    // Injecting (row) data when editing employee
    // employee_data has to be public to make data accessible in html
    @Inject(MAT_DIALOG_DATA) public employee_data: any
  ) {
    this.employeeForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  // To pass employee data on edit
  // ? OnInit: export class AddEditEmployeeComponent implements OnInit
  ngOnInit(): void {
    this.employeeForm.patchValue(this.employee_data);
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      if (this.employee_data) {
        // CASE: UPDATE (EDIT) EMPLOYEE
        this._employeeService.updateEmployee(this.employee_data.id, this.employeeForm.value).subscribe({
          next: (val: any) => {
            alert('Employee updated!');
            // TODO: Not working here !!!
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          },
        });

      } else {
        // CASE: NEW EMPLOYEE
        // Api call to json server through service EmployeeService
        this._employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (val: any) => {
            // On success
            // TODO, alert will be replaced with a snackbar
            alert('Employee added successfully!');
            // Close dialog, passing true to refresh employee list in app.component
            // TODO: Not working?
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
    }
  }
}
