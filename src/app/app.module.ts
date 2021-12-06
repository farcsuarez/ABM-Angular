import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TcategoriasComponent } from './components/tcategorias/tcategorias.component';
import { CategoriasListaComponent } from './components/categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './components/categorias-form/categorias-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ArticulosListaComponent } from './components/articulos-lista/articulos-lista.component';
import { ArticulosFormComponent } from './components/articulos-form/articulos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TcategoriasComponent,
    CategoriasListaComponent,
    CategoriasFormComponent,
    ArticulosListaComponent,
    ArticulosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-center'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
