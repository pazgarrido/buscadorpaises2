import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaisesComponent } from './paises/paises.component';
import { CardComponent } from './card/card.component';
import { DetalleComponent } from './paises/detalle/detalle.component';

import { QuirepregPipe } from './pipes/quirepreg.pipe';
import { OrdenarRegionPipe } from './pipes/ordenar-region.pipe';
import { BuscarRegionPipe } from './pipes/buscar-region.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CallbackPipe } from './pipes/callback.pipe';

registerLocaleData(localeEs)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaisesComponent,
    CardComponent,
    DetalleComponent,
    QuirepregPipe,
    OrdenarRegionPipe,
    BuscarRegionPipe,
    SearchFilterPipe,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
