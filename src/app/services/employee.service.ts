import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  // Type Observable?
  // TODO: Define type for any
  // Service method can be called from component
  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  }
}
