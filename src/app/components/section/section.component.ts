import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss']
})

export class SectionComponent implements OnInit {

  @HostBinding("style.backgroundColor")
  @Input() backgroundColor = "transparent"

  @Input() topBorder = false;
  @Input() bottomBorder = false;
  @Input() noPadding = false;

  constructor() {
  }

  ngOnInit() {
  }
}
