import {Component} from '@angular/core';
import {UiStateService} from "./services/ui-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private uiService: UiStateService) {
  }

  openModal() {
    this.uiService.setShowForm(true);
  }

}
