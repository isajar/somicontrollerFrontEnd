import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
      path: 'reports',
      component: ReportComponent
    },
    {
      path: 'employee',
      component: EmployeeComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
