import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.scss']
})

export class PanelComponent implements OnInit {

  @Input() heightPx = 400;
  @Input() widthPx = 400;

  constructor() {
  }

  ngOnInit() {
  }
}
