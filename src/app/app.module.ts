import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { CoreModule } from "./core/core.module";

@NgModule({

  // dichiarazioni , ove vengono inseriti tutti i componenti creati
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent
  ],

  // importazioni di moduls
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
],
  providers: [],
  // il bootstrap ci dice quale componente viene elaborato alla creazione
  bootstrap: [AppComponent]
})
export class AppModule { }
