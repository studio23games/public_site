import {Injectable, ViewContainerRef} from "@angular/core";
import {ToastComponent} from "../components";

@Injectable({providedIn: 'root'})
export class ToastService {
  view!: ViewContainerRef;

  constructor() {
  }

  success(message: string) {
    this.createToastComponent(message, true);
  }

  failed(message: string) {
    this.createToastComponent(message, false);
  }

  private createToastComponent(message: string, success: boolean) {
    const container = this.view.createComponent(ToastComponent);
    container.instance.success = success;
    container.instance.message = message;
    setTimeout(() => {
      container.destroy();
    }, 6500);
  }

  setOutlet(viewContainer: ViewContainerRef) {
    this.view = viewContainer;
  }

}
