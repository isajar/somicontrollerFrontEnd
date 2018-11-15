import { Component, OnInit } from '@angular/core';
import { StampsService } from './services/stamps.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _stampService: StampsService) { }

  ngOnInit() {
  }

}
