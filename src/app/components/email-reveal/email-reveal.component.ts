import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-reveal',
  templateUrl: 'email-reveal.component.html',
  styleUrls: ['email-reveal.component.scss']
})

export class EmailRevealComponent implements OnInit {
  reveal: boolean = false;
  emailText = "studio23games@proton.me";
  constructor() {
  }

  ngOnInit() {
  }
}
