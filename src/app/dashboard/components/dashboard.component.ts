import { Component } from '@angular/core';

@Component({
  selector: 'employee-dashboard',
  template: `
    <main class="w-screen px-2 top-0 absolute left-0">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class DashboardComponent {

}
