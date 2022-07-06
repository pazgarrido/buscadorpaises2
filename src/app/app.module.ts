import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaisesComponent } from './paises/paises.component';
import { CardComponent } from './card/card.component';
import { DetalleComponent } from './paises/detalle/detalle.component';

import { QuirepregPipe } from './pipes/quirepreg.pipe';
import { OrdenarRegionPipe } from './pipes/ordenar-region.pipe';
import { BuscarRegionPipe } from './pipes/buscar-region.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaisesComponent,
    CardComponent,
    DetalleComponent,
    QuirepregPipe,
    OrdenarRegionPipe,
    BuscarRegionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
