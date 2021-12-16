import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-tcategorias',
  templateUrl: './tcategorias.component.html',
  styleUrls: ['./tcategorias.component.css']
})
export class TcategoriasComponent implements OnInit {

  constructor(private serv: ServicioService) { }

  ngOnInit(): void {
    
  }


}
