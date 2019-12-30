import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BackButtonDirective } from '../directivas/back-button.directive';


@NgModule({
  declarations: [SidebarComponent, Error404Component, HeaderComponent, BreadcrumbComponent, BackButtonDirective],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
        Error404Component,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent,
        BackButtonDirective
  ]
})
export class CompartirModule { }
