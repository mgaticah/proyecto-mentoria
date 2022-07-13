import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { InternoComponent } from './interno/interno.component';
import { ShowNumberComponent } from './show-number/show-number.component';
import { OtraPaginaComponent } from './otra-pagina/otra-pagina.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    OtroComponenteComponent,
    InternoComponent,
    ShowNumberComponent,
    OtraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
