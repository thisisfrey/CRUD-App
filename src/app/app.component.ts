import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeService } from './services/employee.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
import { ConfirmDeleteEmployeeDialogComponent } from './confirm-delete-employee-dialog/confirm-delete-employee-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // for table
  // optional with !
  // TODO, type any
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'dob',
    'education',
    'experience',
    'company',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _employeeService: EmployeeService,
    private _coreService: CoreService
  ) {}

  // AppComponent implements OnInit => ngOnInit()
  ngOnInit(): void {
    this.getEmployees();
  }

  openAddNewEmployeeForm() {
    const dialogRef = this._dialog.open(AddEditEmployeeComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployees();
        }
      },
    });
  }

  openConfirmDeleteEmployeeDialog(id: number) {
    const dialogRef = this._dialog.open(ConfirmDeleteEmployeeDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.deleteEmployee(id);
          // afterwards: this.getEmployees();
        }
      },
    });
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe({
      next: (res) => {
        //console.log(res);
        this.dataSource = new MatTableDataSource(res);
        // connect with MatSort and MatPaginator
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.error,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'OK');
        this.getEmployees();
      },
      error: console.error,
    });
  }

  openEditEmployeeForm(data: IEmployee) {
    const dialogRef = this._dialog.open(AddEditEmployeeComponent, { data });
    // Adding reference to refresh list after closing
    // Refresh list when val is true from this._dialogRef.close(true);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployees();
        }
      },
    });
  }
}
