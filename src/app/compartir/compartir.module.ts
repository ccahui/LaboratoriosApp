import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BackButtonDirective } from '../directivas/back-button.directive';
import { ErrorValidationComponent } from './error-validation/error-validation.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { MaterialModule } from '../material/material.module';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';


@NgModule({
  declarations: [SidebarComponent, Error404Component, HeaderComponent, BreadcrumbComponent, BackButtonDirective,
     ErrorValidationComponent, NotificacionComponent, ButtonLoadingComponent, ModalConfirmComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    Error404Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    BackButtonDirective,
    ErrorValidationComponent,
    ButtonLoadingComponent,
    ModalConfirmComponent,
  ]
})
export class CompartirModule { }
