import { Component, OnInit } from '@angular/core';
import { StampsService } from './services/stamps.service';
import { EmployeesService } from './services/employees.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private stampService: StampsService,
              private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.init();
    this.stampService.init();
  }

}
