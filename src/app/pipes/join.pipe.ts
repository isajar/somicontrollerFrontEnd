import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  constructor( private employeesService: EmployeesService ) {}
  transform(employeeId: string ): Observable<Employee> {
    return this.employeesService.findById(employeeId);
  }

}
