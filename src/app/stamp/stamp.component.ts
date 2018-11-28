import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable} from 'rxjs';

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
  displayedColumns = [ 'workIn', 'workOut'];

  constructor(private stampService: StampsService) { }

  ngOnInit() {

  }

}

export class StampDataSource extends DataSource<any> {
  constructor(private stampService: StampsService) {
    super();
  }
  connect(): Observable<Stamp[]> {
    return this.stampService.stamps$;
  }
  disconnect() {}
}
