import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Icategoria } from 'src/app/inerfaces/icategoria';
@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css']
})
export class CategoriasListaComponent implements OnInit {

  list: any

  constructor(private serv: ServicioService) { }

  ngOnInit(): void {
    this.serv.art_categorias().subscribe((r) => {
      this.list = r
    })
  }

}
