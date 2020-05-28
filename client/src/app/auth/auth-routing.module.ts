import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MemoryComponent } from './components/memory/memory.component';

import { AuthGuard } from './auth.guard'; 


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: LogoutComponent },
  { path: 'secret', component: MemoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }