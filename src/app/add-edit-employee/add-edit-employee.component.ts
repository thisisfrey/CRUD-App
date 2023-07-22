import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'],
})
export class AddEditEmployeeComponent {
  employeeForm: FormGroup;

  education: string[] = ['Intermediate', 'Diploma', 'Graduate', 'Other'];

  // inject services into constructor
  // privates with underscore in name
  // EmployeeService: Implements server connection to db.json
  // DialogRef: Type is the classname
  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _dialogRef: DialogRef<AddEditEmployeeComponent>
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

  onFormSubmit() {
    if (this.employeeForm.valid) {
      // Api call to json server through service EmployeeService
      this._employeeService.addEmployee(this.employeeForm.value).subscribe({
        next: (val: any) => {
          // On success
          // TODO, alert will be replaced with a snackbar
          alert('Employee added successfully!');
          // Close dialog
          this._dialogRef.close();
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
