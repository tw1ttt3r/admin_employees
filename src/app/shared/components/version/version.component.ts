import { Component } from '@angular/core';
import { environment } from '@envs/environment';

@Component({
  selector: 'employee-version',
  template: `
    <div class="w-full absolute bottom-0 text-right pr-3 pb-3">
      <span class="text-gray-300">V:{{ v }}</span>
    </div>
  `,
})
export class VersionComponent {
  readonly v: string = environment.VERSION
}
