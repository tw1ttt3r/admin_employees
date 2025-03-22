import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from '@core/components/main/main.component';
import { LoginComponent } from '@core/components/login/login.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent,
    LoginComponent
  ]
})
export class CoreModule { }
