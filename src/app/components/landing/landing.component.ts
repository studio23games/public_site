import {Component, OnInit} from '@angular/core';
import {UiStateService} from "../../services/ui-state.service";
import {Observable} from "rxjs";

@Component({
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss']
})

export class LandingComponent implements OnInit {

  show$: Observable<boolean>

  constructor(private uiService: UiStateService) {
    this.show$ = uiService.getShowForm$();
  }

  ngOnInit() {
  }

  closeModal() {
    this.uiService.setShowForm(false);
  }


  openModal() {
    this.uiService.setShowForm(true);
  }

}
