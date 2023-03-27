import {Component, OnInit} from '@angular/core';
import {SignUpService, UiStateService} from "../../../services";
import {filter, Observable} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit {
  show$: Observable<boolean>
  mailForm: FormGroup;

  constructor(private uiService: UiStateService, private fb: FormBuilder, private mail: SignUpService) {
    this.show$ = uiService.getShowForm$();
    this.mailForm = fb.group({
      email: fb.nonNullable.control('', [Validators.required, Validators.email]),
      repeat: fb.nonNullable.control('', [Validators.required, sameValueValidator("email")]),
      accept: fb.nonNullable.control(false, [Validators.requiredTrue]),
    });
    this.show$.pipe(filter(t => t)).subscribe(() => {
      this.mailForm.reset();
    })
  }

  ngOnInit() {
  }

  closeModal() {
    this.uiService.setShowForm(false);
  }

  emailValid() {
    return this.mailForm.get('email')!.valid || this.mailForm.get('email')!.pristine
  }

  repeatValid() {
    return this.mailForm.get('repeat')!.valid || this.mailForm.get('repeat')!.pristine
  }

  submitForm() {
    if (this.mailForm.valid) {
      const {email} = this.mailForm.getRawValue();
      this.mail.registerEmail({email}).subscribe(r => {
        if (r)
          this.closeModal();
      });
    }
  }

}

function sameValueValidator(matchAgainst: string) {
  return (control: AbstractControl) => {
    const parent = control?.parent as FormGroup;
    if (parent?.get(matchAgainst)?.value == control.value) return null;
    return {not_same: "The values must be equal"}
  }
}
