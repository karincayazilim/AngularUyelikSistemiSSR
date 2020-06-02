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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
