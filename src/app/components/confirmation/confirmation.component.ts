import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.scss']
})

export class ConfirmationComponent implements OnInit {

  @HostListener("window:keydown.escape")
  escapeClicked() {
    this.dismissAction();
  }


  link: string = "url";
  confirmText = "Proceed";
  rejectText = "Cancel";
  message: string = "Open the link below in a new tab?";

  confirmAction: () => void = () => {
  };

  dismissAction: () => void = () => {
  }

  constructor() {
  }

  ngOnInit() {
  }

  clickConfirm() {
    this.dismissAction();
    this.confirmAction();
  }

  clickCancel() {
    this.dismissAction();
  }

}
