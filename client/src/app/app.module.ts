import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

//This library takes care of sending the token along with each HTTP-request
import { JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard'; 

import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  //Return the JWT that was saved in localStorage
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //Allow to send JWT's to this domain
        whitelistedDomains: ['localhost:4000'],
        //Specified domain that shouldn't receive JWT's, 
        //this domain should only create JWT's, not receive them
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
