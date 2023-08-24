import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { PlanesComponent } from './planes/planes.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReusableModelComponent } from './reusable-model/reusable-model.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ReusableModalComponent } from './reusable-modal/reusable-modal.component';

import {
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    FooterComponent,
    PlanesComponent,
    ProjectsComponent,
    ReusableModelComponent,
    SnippetsComponent,
    EditorComponent,
    LandingPageComponent,
    ConfigComponent,
    ReusableModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule

  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('994153858584252'),
        },
      ],
    } as SocialAuthServiceConfig,
  },
   ],
  bootstrap: [AppComponent],
})
export class AppModule { }
