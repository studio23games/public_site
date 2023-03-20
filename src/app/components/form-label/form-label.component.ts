import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-label',
  templateUrl: 'form-label.component.html',
  styleUrls: ['form-label.component.scss']
})

export class FormLabelComponent implements OnInit {
  @Input() issue = "There is a problem with this field";
  @Input() heading = "Value";
  @Input() valid: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
