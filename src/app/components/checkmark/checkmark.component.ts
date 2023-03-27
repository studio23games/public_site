import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-checkmark',
  templateUrl: 'checkmark.component.html',
  styleUrls: ['checkmark.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckmarkComponent),
      multi: true
    }
  ]
})

export class CheckmarkComponent implements OnInit, ControlValueAccessor {

  @Input() description = "I agree";

  internalChecked = false;

  onChange!: (obj: any) => void;
  onTouched!: () => void;


  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.internalChecked = obj;
  }

  check() {
    this.onTouched?.()
    this.internalChecked = !this.internalChecked;
    this.onChange?.(this.internalChecked);
  }

}

