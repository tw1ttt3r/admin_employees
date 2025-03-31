import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionComponent } from '@shared/components/version/version.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { ErrorControlComponent } from '@shared/components/error-control/error-control.component';
import { NavComponent } from '@shared/components/nav/nav.component';
import { UtilsService } from '@services/utils.service';



@NgModule({
  declarations: [
    VersionComponent,
    ImageComponent,
    ErrorControlComponent,
    NavComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VersionComponent,
    ImageComponent,
    ErrorControlComponent,
    NavComponent
  ],
  providers: [
    UtilsService
  ]
})
export class SharedModule { }
