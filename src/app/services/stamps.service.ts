import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stamp } from '../models/stamp';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StampsService {

  private subject = new BehaviorSubject<Stamp[]>([]);

  stamps$: Observable<Stamp[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    console.log('entre al servicio stamps');
  }

  init() {
    const month = new Date().getMonth();
    this.http.get<Stamp[]>(`http://localhost:3000/api/stamps?month=${month}`)
              .subscribe(stamps => this.subject.next(stamps));
  }

  saveStamp(employeeId: string) {
    const stamps = this.subject.getValue();
    const activeStamp = stamps.find( stamp => (stamp.employeeId === employeeId && !stamp.workOut ));
    // if there is an active stamp for the employee => update
    if ( activeStamp ) {
       const stampIndex = stamps.findIndex( stamp => stamp._id === activeStamp._id );
       const newStamps = stamps.slice(0);
       const stampToUpdate = {
        ...stamps[stampIndex],
        workOut: new Date()
      };
       this.putStamp(stampToUpdate, stampToUpdate._id ).subscribe(
         updatedStamp => {
           newStamps[stampIndex] = updatedStamp;
           this.subject.next(newStamps);
         });
    } else {
    // if does not exist any active stamp for the employee => create one
      const now = new Date();
      this.postStamp({
        employeeId,
        month: now.getMonth(),
        workIn: now
      }).subscribe(
        newStamp => {
          stamps.push(newStamp);
          this.subject.next(stamps);
        }
      );
    }
  }

  postStamp( stamp: Stamp ) {
    return this.http.post<Stamp>('http://localhost:3000/api/stamps', stamp);
  }

  putStamp( stamp: Stamp,  stampId: string  ) {
    return this.http.put<Stamp>(`http://localhost:3000/api/stamps/${stampId}`, stamp);
  }



}
