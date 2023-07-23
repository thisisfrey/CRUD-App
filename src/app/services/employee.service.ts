import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/server_url';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  // ? How is type IEmployee recognized, no import?
  // ? Type Observable<any>, TODO: Replace type any
  // Service method can be called from component
  addEmployee(data: IEmployee): Observable<any> {
    return this._http.post(`${SERVER_URL}/employees`, data);
  }

  getEmployees(): Observable<any> {
    return this._http.get(`${SERVER_URL}/employees`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`{${SERVER_URL}/employees/${id}`);
  }

  updateEmployee(id: number, data: IEmployee): Observable<any> {
    return this._http.put(`{${SERVER_URL}/employees/${id}`, data);
  }
}
