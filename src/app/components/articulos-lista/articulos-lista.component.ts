import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {

  list: any
  constructor(private serv: ServicioService) { }

  ngOnInit(): void {
    this.serv.list_articulos().subscribe((r) => {
      this.list = r
    })
  }

}
