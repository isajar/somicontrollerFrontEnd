import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stamp, StampExt } from '../models/stamp';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StampsService {

  constructor(private http: HttpClient) {
    console.log('entre al servicio stamps');

  }

  getAllStamps(): Observable<StampExt[]> {
    return this.http.get<Stamp[]>('http://localhost:3000/api/stamps').pipe(
      map( stamps => stamps.map( stamp => {
        const time = new Date(stamp.time);
        const date = time.toLocaleDateString();
        const timeString = time.toLocaleTimeString();
        return {...stamp, date, timeString};
    }))
    );
  }


}
