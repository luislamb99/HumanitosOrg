import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LaFundacionComponent} from './components/la-fundacion/la-fundacion.component';
import {ViajeroComponent} from './components/viajero/viajero.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {SamiComponent} from './components/sami/sami.component';
import {Page404Component} from './components/page404/page404.component';
import {DonacionesComponent} from './components/donaciones/donaciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fundacion', component: LaFundacionComponent },
  { path: 'viajero', component: ViajeroComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sami', component: SamiComponent },
  { path: 'donaciones', component: DonacionesComponent },
  { path: '**', component: Page404Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
