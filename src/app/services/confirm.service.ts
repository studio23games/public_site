import {Injectable, ViewContainerRef} from "@angular/core";
import {ConfirmDetail} from "../model/confirm-detail";
import {ConfirmationComponent} from "../components/confirmation/confirmation.component";

@Injectable({providedIn: 'root'})
export class ConfirmService {
  private view!: ViewContainerRef;

  registerView(view: ViewContainerRef) {
    this.view = view;
  }

  confirmLink(options: ConfirmDetail) {
    const container = this.view.createComponent(ConfirmationComponent);
    const inst = container.instance;
    inst.link = options.link;
    inst.confirmText = options.confirmText ?? inst.confirmText;
    inst.rejectText = options.rejectText ?? inst.rejectText;
    inst.message = options.message ?? inst.message;
    inst.confirmAction = options.confirmAction;
    inst.dismissAction = () => container.destroy();

  }


}
