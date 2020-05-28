import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MemoryComponent } from './components/memory/memory.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, MemoryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ], 
  exports: [
    LoginComponent,
    LogoutComponent
  ]
})
export class AuthModule { }
