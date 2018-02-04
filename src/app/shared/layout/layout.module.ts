import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from 'ng-sidebar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }