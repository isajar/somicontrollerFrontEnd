import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, EmptyError } from 'rxjs';
import { map, tap, filter, isEmpty, defaultIfEmpty, first } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private subject = new BehaviorSubject<Employee[]>([]);

  employees$: Observable<Employee[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    console.log('entre al servicio de empleados');
  }

/**
 * @description get all the employees from the db and share replay to the observables
 */
  init() {
    this.http.get<Employee[]>(`${environment.apiUrl}/employees`)
                .subscribe(employees => this.subject.next(employees));
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description find an employee by dni
 * @param dni employee's dni
 * @returns an observable with the found employee
 */
  findByDni( dni: string ) {
    return this.employees$
    .pipe(
      filter( employee => !!employee ),
      // filter undefined employee do to the initial (empty) value of the subject
      map( employees => {
        const result = employees.find( employee => employee.dni === dni);
        if ( !result ) {
          throw new Error('Invalid DNI');
        } else {
          return result;
        }
      }),
      first()
    );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description find an employee by id
 * @param id employee's id
 * @returns an observable with the found employee
 */
  findById( id: string) {
    return this.employees$
    .pipe(
      // filter undefined employee do to the initial (empty) value of the subject
      filter( employee => !!employee ),
      map( employees => employees.find( employee => employee._id === id)),
      first(),
    );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description wrapper to decide if updating or creating an employee
 * @param employee an employee object
 * @returns an observable of the server response
 */
  saveEmployee( employee: Employee ) {
    // if _id is present -> edit else create
    return employee._id ? this.putEmployee( employee ) : this.postEmployee( employee );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description post a new employee to the db execute http post
 * @param employee an employee object
 * @returns an observable of the server response
 */
  postEmployee( employee: Employee ) {
    return this.http.post<Employee>(`${environment.apiUrl}/employees`, employee)
                      .pipe( tap( res => this.updateInSubject(res) ) );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description put an employee to the db execute http put
 * @param employee an employee object
 * @returns an observable of the server response
 */
  putEmployee( employee: Employee ) {
    return this.http.put<Employee>(`${environment.apiUrl}/employees/${employee._id}`, employee)
                      .pipe( tap( res => this.updateInSubject(res) ) );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description put an employee to the db execute http put
 * @param employee an employee object
 * @returns an observable of the server response
 */
  deleteEmployee( employeeId: string ) {
    return this.http.delete<Employee>(`${environment.apiUrl}/employees/${employeeId}`)
                      .pipe( tap( res => this.deleteInSubject(res) ) );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description update the subject after updating the db -> this update the UI to reflect the db changes
 * @param newEmployee an object to update the subject
 */
  updateInSubject( newEmployee: Employee ) {
    // come from edit or create
    const employees = this.subject.getValue();
    const updatedEmployees = employees.slice(0);

    // come from edit -> find in the array
    let index = employees.findIndex( employee => employee._id === newEmployee._id );

    if ( index === -1 ) {
      // so is a new employee to add to the end of the array
      index = employees.length;
    }

    updatedEmployees[index] = {
      ...employees[index],
      ...newEmployee
    };

    this.subject.next(updatedEmployees);

  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description update the subject after updating the db -> this update the UI to reflect the db changes
 * @param oldEmployee the deleted employee
 */
  deleteInSubject( oldEmployee: Employee ) {

    const employees = this.subject.getValue();
    const updatedEmployees = employees.slice(0);

    const index = employees.findIndex( employee => employee._id === oldEmployee._id );

    updatedEmployees.splice( index, 1 );

    this.subject.next(updatedEmployees);

  }
// ------------------------------------------------------------------------------------------------------------------




}
