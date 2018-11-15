import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from '../models/stamp';
import { StampsService } from '../services/stamps.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.css']
})


export class StampComponent implements OnInit {

  dataSource = new StampDataSource(this.stampService);
  displayedColumns = ['month', 'time'];

  constructor(private stampService: StampsService) { }

  ngOnInit() {
  }

}

export class StampDataSource extends DataSource<any> {
  constructor(private stampService: StampsService) {
    super();
  }
  connect(): Observable<Stamp[]> {
    return this.stampService.getAllStamps();
  }
  disconnect() {}
}
