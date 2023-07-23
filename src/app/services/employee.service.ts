import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  // ? How is type IEmployee recognized, no import?
  // ? Type Observable<any>, TODO: Replace type any
  // Service method can be called from component
  addEmployee(data: IEmployee): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  }

  getEmployees(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: number, data: IEmployee): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
