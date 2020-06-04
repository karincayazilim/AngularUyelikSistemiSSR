import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/layouts/header/header.component';
import { FooterComponent } from './content/layouts/footer/footer.component';
import { AuthComponent } from './content/pages/auth/auth.component';
import { LoginComponent } from './content/pages/auth/login/login.component';
import { ForgotPasswordComponent } from './content/pages/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './content/pages/auth/register/register.component';
import { MainPageComponent } from './content/pages/main-page/main-page.component';
import { ProfileComponent } from './content/pages/main-page/profile/profile.component';
import { SettingComponent } from './content/pages/main-page/setting/setting.component';
import { DashboardComponent } from './content/pages/main-page/dashboard/dashboard.component';
import { SliderComponent } from './content/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    MainPageComponent,
    ProfileComponent,
    SettingComponent,
    DashboardComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
