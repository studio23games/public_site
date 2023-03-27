import {Injectable} from "@angular/core";
import {SignUpIntent} from "../model";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {ToastService} from "./toast.service";

@Injectable({providedIn: 'root'})
export class SignUpService {
  private registrationEndpoint = window.api.route;

  constructor(private http: HttpClient, private toast: ToastService) {
  }

  registerEmail(detail: SignUpIntent): Observable<boolean> {
    const endpoint = `${this.registrationEndpoint}/api/mail`;

    return this.http.post<{ result: boolean }>(endpoint, detail).pipe(
      catchError(_ => of({result: false})),
      tap(response => {
        if (response.result) {
          this.toast.success("Registration completed");
        } else {
          this.toast.failed("Something went wrong. Try again later");
        }
      }),
      map(({result}) => result)
    )
  }
}

declare global {
  interface Window {
    api: { route: string };
  }
}
