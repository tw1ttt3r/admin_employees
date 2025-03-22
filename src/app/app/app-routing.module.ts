import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN, ROOT } from '@config/routes';
import { MainComponent } from '@core/components/main/main.component';
import { LoginComponent } from '@core/components/login/login.component';

const routes: Routes = [
  {
    path: ROOT,
    component: MainComponent
  },
  {
    path: LOGIN,
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
