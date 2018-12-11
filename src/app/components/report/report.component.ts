import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable} from 'rxjs';
import { ReportsService } from 'src/app/services/reports.service';
import { Stamp } from 'src/app/models/stamp';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataSource = new ReportDataSource(this.reportService);
  displayedColumns = [ 'workIn', 'workOut'];

  constructor( private reportService: ReportsService) { }

  ngOnInit() {
  }

}

export class ReportDataSource extends DataSource<any> {
  constructor(private reportService: ReportsService) {
    super();
  }
  connect(): Observable<Stamp[]> {
    return this.reportService.reports$;
  }
  disconnect() {}
}
