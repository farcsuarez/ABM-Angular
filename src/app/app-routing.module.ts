import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasFormComponent } from './components/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './components/categorias-lista/categorias-lista.component';
const routes: Routes = [
  { path: 'categForm/:id/:accion', component: CategoriasFormComponent },
  { path: 'categList', component: CategoriasListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
