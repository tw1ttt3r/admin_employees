import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'employee-nav',
  template: `
    <nav class="flex w-full" [ngClass]="classes">
      <ng-content />
    </nav>
  `,
})
export class NavComponent implements OnChanges {

  @Input("class")
  classes: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if ("class" in changes) {
      this.classes = changes["class"].currentValue ?? "";
    }
  }

}
