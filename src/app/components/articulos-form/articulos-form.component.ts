import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IArticulo } from 'src/app/inerfaces/iarticulos';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-articulos-form',
  templateUrl: './articulos-form.component.html',
  styleUrls: ['./articulos-form.component.css']
})
export class ArticulosFormComponent implements OnInit {

  articulo: IArticulo = {
    id: '',
    codigo: '',
    id_categoria: '',
    detalle: ''
  }
  categorias: any
  accion: string | null = ''
  f: FormGroup

  constructor(private fb: FormBuilder,
    private serv: ServicioService,
    private route: ActivatedRoute,
    private ruteador: Router) {
    this.f = fb.group({
      id: [''],
      codigo: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
      id_categoria: ['', [Validators.required]],
      detalle: ['', [Validators.required, Validators.maxLength(30)]]
    })

    this.accion = this.route.snapshot.paramMap.get('accion')
    this.articulo.id = this.route.snapshot.paramMap.get('id')

    if (this.accion == 'editar') {
      this.llenarForm()
    }

    if (this.accion == 'eliminar') {
      this.llenarForm()
      this.f.controls['codigo'].disable()
      this.f.controls['id_categoria'].disable()
      this.f.controls['detalle'].disable()
    }


  }

  submit() {
    if (this.accion == 'alta') {
      this.leerForm()
      this.serv.ins_articulos(this.articulo).subscribe(() => {
        this.ruteador.navigateByUrl('/articulosList')
      })
    }

    if (this.accion == 'editar') {
      this.leerForm()
      this.serv.edit_articulos(this.articulo.id, this.articulo).subscribe(() => {
        this.ruteador.navigateByUrl('/articulosList')
      })
    }

    if (this.accion == 'eliminar') {
      this.leerForm()
      this.serv.del_articulos(this.articulo.id).subscribe(() => {
        this.ruteador.navigateByUrl('/articulosList')
      })
    }
  }

  leerForm() {
    this.articulo.codigo = this.f.get('codigo')?.value
    this.articulo.id_categoria = this.f.get('id_categoria')?.value
    this.articulo.detalle = this.f.get('detalle')?.value
  }

  llenarForm() {
    this.serv.articulo_id(this.articulo.id).subscribe((r) => {
      this.f.setValue({
        id: r[0]['id'],
        codigo: r[0]['codigo'],
        id_categoria: r[0]['id_categoria'],
        detalle: r[0]['detalle']
      })
    })
  }

  ngOnInit(): void {
    this.serv.art_categorias().subscribe((r) => {
      this.categorias = r
    })
  }

}
