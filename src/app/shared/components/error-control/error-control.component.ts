import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'employee-error-control',
  template: `<span *ngIf="show" class="text-red-500 font-bold">{{ msg }}</span>`,
})
export class ErrorControlComponent implements OnChanges {
  @Input()
  msg: string = "";

  @Input()
  show: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if("msg" in changes) {
      this.msg = changes["msg"].currentValue;
    }

    if("show" in changes) {
      this.show = changes["show"].currentValue;
    }
  }
}
