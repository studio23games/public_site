import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UiStateService {

  showForm$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  setShowForm(bool: boolean) {
    this.showForm$.next(bool)
  }

  getShowForm$(): Observable<boolean> {
    return this.showForm$.asObservable();
  }

}
