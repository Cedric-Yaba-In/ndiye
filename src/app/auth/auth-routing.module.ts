import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AuthLoginComponent} from "./auth-login/auth-login.component"

import {
  AppLayoutDividedFullComponent} from "@youpez/index"

import {AuthSignupComponent} from "./auth-signup/auth-signup.component"
import {AuthForgotPasswordComponent} from "./auth-forgot-password/auth-forgot-password.component"
import {AuthResetPasswordComponent} from "./auth-reset-password/auth-reset-password.component"
import {AuthConfirmationComponent} from "./auth-confirmation/auth-confirmation.component"

const routes: Routes = [
  
  { 
    path: '',
    component: AppLayoutDividedFullComponent,
    children: [
      {
        path: 'signin',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'confirmation',
        component: AuthConfirmationComponent,
      },
      {
        path: '**',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
    ],
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
