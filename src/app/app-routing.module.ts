import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosFormComponent } from './components/articulos-form/articulos-form.component';
import { ArticulosListaComponent } from './components/articulos-lista/articulos-lista.component';
import { CategoriasFormComponent } from './components/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './components/categorias-lista/categorias-lista.component';
import { TcategoriasComponent } from './components/tcategorias/tcategorias.component';
const routes: Routes = [
  { path: 'categForm/:id/:accion', component: CategoriasFormComponent },
  { path: 'categList', component: CategoriasListaComponent },
  { path: 'categ', component: TcategoriasComponent },
  { path: 'articulosList', component: ArticulosListaComponent },
  { path: 'articulosForm/:id/:accion', component: ArticulosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
