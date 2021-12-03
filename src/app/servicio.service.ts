import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategoria } from './inerfaces/icategoria';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  API: string = 'http://localhost/ABM_API.php'

  constructor(private http: HttpClient) { }

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
}
