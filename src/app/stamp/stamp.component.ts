import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable} from 'rxjs';

import { StampExt } from '../models/stamp';
import { StampsService } from '../services/stamps.service';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.css']
})


export class StampComponent implements OnInit {

  dataSource = new StampDataSource(this.stampService);
  displayedColumns = ['month', 'time', 'subtotal'];

  constructor(private stampService: StampsService) { }

  ngOnInit() {

  }

}

export class StampDataSource extends DataSource<any> {
  constructor(private stampService: StampsService) {
    super();
  }
  connect(): Observable<StampExt[]> {
    return this.stampService.getAllStamps();
  }
  disconnect() {}
}
