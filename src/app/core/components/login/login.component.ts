import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL } from '@config/regex';

@Component({
  selector: 'employee-login',
  template: `
    <employee-image alt="Logo UPT" class="w-[180px] pb-4" src="/logo_upt.png" />
    <form (submit)="login()" [formGroup]="loginForm" class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label for="user">Usuario</label>
        <input id="user" type="text" formControlName="user" placeholder="Usuario">
        <employee-error-control [show]="isValidControl('user')" msg="Usuario Obligatorio" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="pass">Contraseña</label>
        <input id="pass" type="password" formControlName="pass" placeholder="Contraseña">
        <employee-error-control [show]="isValidControl('pass')"msg="Contraseña Obligatoria" />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  `
})
export class LoginComponent {

  private _fb = inject(FormBuilder);

  loginForm: FormGroup = this._fb.group({
    user: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern(EMAIL)])],
    pass: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
  });

  login() {
    if (!!this.loginForm.valid) {
      // TODO conexión a servicio auth
    }
  }

  isValidControl(control: string) {
    return !!this.loginForm.controls[control].errors && !!this.loginForm.controls[control].touched
  }

}
