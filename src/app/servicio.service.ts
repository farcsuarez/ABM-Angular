import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategoria} from './inerfaces/icategoria';
import { IArticulo } from './inerfaces/iarticulos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  API: string = 'http://localhost/ABM_API.php'

  constructor(private http: HttpClient) { }

  //................... categorias
  art_categorias() {
    return this.http.get(this.API + "?lista_art_categorias=1")
  }

  ins_art_categorias(record: Icategoria): Observable<any> {
    return this.http.post(this.API + "?ins_art_categorias=1", record)
  }

  edit_art_categorias(id: any, record: Icategoria): Observable<any> {
    return this.http.post(this.API + "?edit_art_categorias=" + id, record)
  }

  art_categoria_id(id: any): Observable<any> {
    return this.http.get(this.API + "?art_categoria_id=" + id)
  }

  del_art_categorias(id: any): Observable<any> {
    return this.http.get(this.API + "?del_art_categorias=" + id)
  }

  // ARTICULOS
  list_articulos() {
    return this.http.get(this.API + "?list_articulos=1")
  }

  ins_articulos(record: IArticulo): Observable<any> {
    return this.http.post(this.API + "?ins_articulos=1", record)
  }

  edit_articulos(id: any, record: IArticulo): Observable<any> {
    return this.http.post(this.API + "?edit_articulos=" + id, record)
  }

  articulo_id(id: any): Observable<any> {
    return this.http.get(this.API + "?articulo_id=" + id)
  }

  del_articulos(id: any): Observable<any> {
    return this.http.get(this.API + "?del_articulos=" + id)
  }
}
