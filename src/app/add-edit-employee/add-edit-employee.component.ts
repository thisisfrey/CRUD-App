import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'],
})
export class AddEditEmployeeComponent {
  employeeForm: FormGroup;

  education: string[] = ['Intermediate', 'Diploma', 'Graduate', 'Other'];

  constructor(private _fb: FormBuilder) {
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

  onFormSubmit(){
    if(this.employeeForm.valid){
      console.log(this.employeeForm.value)
    }
  }
}
