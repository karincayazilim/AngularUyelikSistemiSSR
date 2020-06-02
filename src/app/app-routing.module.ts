import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import {AuthComponent} from "./content/pages/auth/auth.component";
import {LoginComponent} from "./content/pages/auth/login/login.component";
import {RegisterComponent} from "./content/pages/auth/register/register.component";
import {ForgotPasswordComponent} from "./content/pages/auth/forgot-password/forgot-password.component";
import {MainPageComponent} from "./content/pages/main-page/main-page.component";
import {ProfileComponent} from "./content/pages/main-page/profile/profile.component";
import {SettingComponent} from "./content/pages/main-page/setting/setting.component";
import {DashboardComponent} from "./content/pages/main-page/dashboard/dashboard.component";


export const appRoutes: Route[] = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'},//url adresi boşsa logine yönlendir
  { //herkese açık sayfalardır. Public pages
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  },
  { //üye girişi yapan kullanıcıların erişebileceği sayfalardır. Private pages
    path: 'page', component: MainPageComponent, canActivateChild: [], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profiles', component: ProfileComponent },
      { path: 'settings', component: SettingComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
