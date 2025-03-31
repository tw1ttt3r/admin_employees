import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { UtilsService } from '@services/utils.service';
import { ROLES } from '@config/roles.types';
import user from '@models/user';

@Component({
  selector: 'app-root',
  template: `
    <section class="w-screen h-screen relative">
      <section class="w-full h-full flex items-center justify-center relative">
        <employee-nav *ngIf="logged" class="w-screen px-2 flex gap-3 absolute top-0 mt-3">
          <employee-image alt="Logo UPT" class="w-[50px]" src="/logo_upt.png" />
          <div class="flex gap-2 items-center justify-center w-full flex-2">
            <ul class="flex justify-between w-full px-2">
              <li class="flex items-center">
                <p>Bienvenido {{ user.nombre }} {{ user.ap_paterno }} {{ user.ap_materno }}</p>
              </li>
              <li class="flex items-center">
                <p>{{ time }} hrs.</p>
              </li>
            </ul>
          </div>
          <div *ngIf="logged" class="flex-1 flex items-center justify-center border-l-1 border-gray-400">
            <ul class="flex gap-2 justify-between" *ngIf="user.id_rol! === roles.USER">
              <li>Configurar mi Usuario</li>
              <li>Configurar Horario</li>
            </ul>
            <ul class="flex gap-2 justify-between" *ngIf="user.id_rol! === roles.ADMIN">
              <li>Administración de Usuarios</li>
              <li>Gestión de Accesos</li>
              <li>Reportes</li>
            </ul>
          </div>
        </employee-nav>
        <router-outlet></router-outlet>
      </section>
      <employee-version />
    </section>
  `,
})
export class AppComponent implements OnInit, OnDestroy {

  logged: boolean = false;
  time: string = "";
  user: user = {};
  roles = ROLES;
  manageSubs: Subject<any> = new Subject<any>();

  constructor(
    private _auth: AuthService,
    private _utils: UtilsService
  ) {}

  ngOnInit(): void {

    this._utils.dateTime$
      .pipe(takeUntil(this.manageSubs))
      .subscribe((t: string) => this.time = t);

    this._auth.getLoggedStatus()
      .pipe(takeUntil(this.manageSubs))
      .subscribe((value: boolean) => {
        this.logged = value;
      });

    this._auth.getUser()
      .pipe(takeUntil(this.manageSubs))
      .subscribe((value: user) => this.user = value);
  }

  ngOnDestroy(): void {
    this.manageSubs.next(null);
    this.manageSubs.complete();
    this.manageSubs.unsubscribe();
  }

}
