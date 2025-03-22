import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="w-screen h-screen relative">
      <section class="w-full h-full flex items-center justify-center">
        <router-outlet></router-outlet>
      </section>
      <employee-version />
    </section>
  `,
})
export class AppComponent {

}
