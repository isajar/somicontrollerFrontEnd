import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stamp } from '../models/stamp';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reports$: Observable<Stamp[]>;

  constructor() {
    // Only to test. Modify later...
    this.reports$ = of([]);
  }
}
