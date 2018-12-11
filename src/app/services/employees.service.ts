import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private subject = new BehaviorSubject<Employee[]>([]);

  employees$: Observable<Employee[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    console.log('entre al servicio de empleados');
  }

  init() {
    this.http.get<Employee[]>('http://localhost:3000/api/employees')
                .subscribe(employees => this.subject.next(employees));
  }

  findByDni( dni: string ) {
    return this.employees$.pipe(
      map( employees => employees
        .find( employee => employee.dni === dni))
    );
  }

  findById( id: string) {
    return this.employees$.pipe(
      map( employees => employees
        .find( employee => employee._id === id))
    );
  }

  postEmployee( employee: Employee ) {
    return this.http.post<Employee>('http://localhost:3000/api/employees', employee)
                      .pipe( tap( res => this.pushNewEmployee(res) ) );

  }

  pushNewEmployee( newEmployee: Employee) {
    const employees = this.subject.getValue();
    employees.push(newEmployee);
    this.subject.next(employees);
  }





}
