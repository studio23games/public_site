import {Injectable} from "@angular/core";
import {SignUpIntent} from "../model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class SignUpService {
  private registrationEndpoint = "";

  constructor(private http: HttpClient) {
  }

  registerEmail(detail: SignUpIntent) {
    return this.http.post(this.registrationEndpoint, detail)
  }
}
