import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stamp } from '../models/stamp';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class StampsService {

  private subject = new BehaviorSubject<Stamp[]>([]);

  stamps$: Observable<Stamp[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    console.log('entre al servicio stamps');
  }
/**
 * @description get all the stamps (current month but has to be current day) from the db and share replay to the observables
 */
  init() {
    const month = new Date().getMonth();
    this.http.get<Stamp[]>(`http://localhost:3000/api/stamps?month=${month}`)
              .subscribe(stamps => this.subject.next(stamps));
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description post a new stanp to the db execute http post
 * @param employeeId an employeeId corresponding to the employee's stamp
 * @returns an observable of the server response
 */
  postStamp( employeeId: string ) {
    return this.http.post<Stamp>(`${environment.apiUrl}/stamps/`, { employeeId })
                    .pipe( tap( res => this.updateInSubject( res ) ) );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description put a stamp to the db execute http put
 * @param stamp a stamp object
 * @returns an observable of the server response
 */
  putStamp( stamp: Stamp ) {
    return this.http.put<Stamp>(`${environment.apiUrl}/stamps/${stamp._id}`, stamp)
                    .pipe( tap( res => this.updateInSubject( res ) ) );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description wrapper to decide if updating or creating a stamp
 * @param employeeId Id of the employee's stamp
 * @returns an observable of the server response
 */
  saveStamp ( employeeId: string ) {
    // if _id is present -> edit else create
    const stamps = this.subject.getValue();
    const activeStamp = stamps.find( stamp => (stamp.employeeId === employeeId && !stamp.workOut ));
    return activeStamp ? this.putStamp( activeStamp ) : this.postStamp( employeeId );
  }
// ------------------------------------------------------------------------------------------------------------------
/**
 * @description update the subject after updating the db -> this update the UI to reflect the db changes
 * @param newEmployee an object to update the subject
 */
  updateInSubject( newStamp: Stamp ) {
    // come from edit or create
    const stamps = this.subject.getValue();
    const updatedStamps = stamps.slice(0);

    let index = stamps.findIndex( stamp => stamp._id === newStamp._id );

    if ( index === -1 ) {
      index = stamps.length;
    }

    updatedStamps[index] = {
      ...stamps[index],
      ...newStamp
    };

    this.subject.next( updatedStamps );

  }

}
