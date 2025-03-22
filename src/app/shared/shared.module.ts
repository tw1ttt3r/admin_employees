import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionComponent } from '@shared/components/version/version.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { ErrorControlComponent } from '@shared/components/error-control/error-control.component';



@NgModule({
  declarations: [
    VersionComponent,
    ImageComponent,
    ErrorControlComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VersionComponent,
    ImageComponent,
    ErrorControlComponent,
  ]
})
export class SharedModule { }
