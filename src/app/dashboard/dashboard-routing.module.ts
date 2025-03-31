import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT } from '@config/routes';
import { DashboardComponent } from '@dashboard/components/dashboard.component';

const routes: Routes = [
  {
    path: ROOT,
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
