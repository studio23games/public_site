import {Directive, ViewContainerRef} from "@angular/core";
import {ConfirmService} from "../services/confirm.service";
import {ToastService} from "../services";

@Directive({selector: '[appOutlet]'})
export class OutletProviderDirective {

  constructor(
    public view: ViewContainerRef,
    private service: ConfirmService,
    private toast: ToastService) {
    service.registerView(view);
    toast.setOutlet(view);
  }

}
