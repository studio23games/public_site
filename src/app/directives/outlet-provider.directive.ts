import {Directive, ViewContainerRef} from "@angular/core";
import {ConfirmService} from "../services/confirm.service";

@Directive({selector: '[appOutlet]'})
export class OutletProviderDirective {

  constructor(public view: ViewContainerRef, private service: ConfirmService) {
    service.registerView(view)
  }

}
