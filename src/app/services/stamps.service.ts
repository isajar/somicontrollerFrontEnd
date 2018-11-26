import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stamp } from '../models/stamp';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StampsService {

  constructor(private http: HttpClient) {
    console.log('entre al servicio stamps');

  }

  getAllStamps(): Observable<Stamp[]> {
    return this.http.get<Stamp[]>('http://localhost:3000/api/stamps');
  }


}
