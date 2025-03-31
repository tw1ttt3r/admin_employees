import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from "@shared/shared.module";
import { AuthService } from '@services/auth.service';
import { UtilsService } from '@services/utils.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    AuthService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
