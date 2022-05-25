import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggingInterceptor } from './logging.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import  { EdituserComponent} from  './user/edituser/edituser.component'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
UserlistComponent,
AdduserComponent,
EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true},
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
