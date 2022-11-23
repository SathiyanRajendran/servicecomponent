import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
