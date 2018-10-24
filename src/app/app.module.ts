import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Traductor NGX
import {HttpClientModule, HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaFundacionComponent } from './components/la-fundacion/la-fundacion.component';
import { SamiComponent } from './components/sami/sami.component';
import { ViajeroComponent } from './components/viajero/viajero.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { FooterComponent } from './components/footer/footer.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';

// Social Buttons
import { ShareButtonsModule } from '@ngx-share/buttons';

// Traductor NGX
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LaFundacionComponent,
    SamiComponent,
    ViajeroComponent,
    ContactoComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    FooterComponent,
    DonacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
