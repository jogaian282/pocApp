import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from './app.config';
import { HttpService } from './service/http.service';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './shared/layout/layout.module';
import { DataTablesModule } from 'angular-datatables';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ResponseComponent,
    DashboardComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    AuthModule,
    AngularFontAwesomeModule,
    AppRouting,
    DataTablesModule,
    SidebarModule.forRoot()
  ],
  exports: [
    FormsModule,SidebarModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig },HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
