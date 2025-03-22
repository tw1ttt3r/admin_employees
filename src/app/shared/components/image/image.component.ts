import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'employee-image',
  template: `
    <div [ngClass]="classes">
      <img class="w-full h-full" [src]="src" [alt]="alt" />
    </div>
  `
})
export class ImageComponent implements OnInit, OnChanges {
  @Input()
  src: string = "";

  @Input()
  alt: string = "";

  @Input("class")
  classes: string = "";

  ngOnInit(): void {
    if (!this.src) {
      throw new Error("src is obligatotory!");
    }

    if (!this.alt) {
      throw new Error("alt is obligatotory!");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ("src" in changes) {
      this.src = changes["src"].currentValue ?? "";
    }

    if ("alt" in changes) {
      this.alt = changes["alt"].currentValue ?? "";
    }

    if ("class" in changes) {
      this.classes = changes["class"].currentValue ?? "";
    }
  }
}
