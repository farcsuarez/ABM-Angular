import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icategoria } from 'src/app/inerfaces/icategoria';
import { ServicioService } from 'src/app/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {
  accion: string | null = ''
  f: FormGroup
  categoria: Icategoria = {
    id: '',
    detalle: ''
  }

  constructor(private serv: ServicioService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ruteador: Router,
    private toast: ToastrService) {
    this.f = fb.group({
      detalle: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]]
    })
    this.accion = this.route.snapshot.paramMap.get('accion')
    this.categoria.id = this.route.snapshot.paramMap.get('id')

    if (this.accion == 'editar' || this.accion == 'eliminar') {
      serv.art_categoria_id(this.categoria.id).subscribe((r) => {
        this.f.setValue({
          detalle: r[0]['detalle']

        })
      })
    }

    if (this.accion == 'eliminar') {
      this.f.controls['detalle'].disable()
    }
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.accion == 'alta') {
      this.categoria.detalle = this.f.get('detalle')?.value
      this.serv.ins_art_categorias(this.categoria).subscribe(() => {
        this.ruteador.navigateByUrl('/categList')
        this.toast.success('Alta exitosa!', 'Operaciones con Registros')
      })
    }

    if (this.accion == 'editar') {
      this.categoria.detalle = this.f.get('detalle')?.value
      this.serv.edit_art_categorias(this.categoria.id, this.categoria).subscribe(() => {
        this.ruteador.navigateByUrl('/categList')
        this.toast.info('Edición exitosa!', 'Operaciones con Registros')
      })
    }

    if (this.accion == 'eliminar') {
      this.categoria.detalle = this.f.get('detalle')?.value
      this.serv.del_art_categorias(this.categoria.id).subscribe(() => {
        this.ruteador.navigateByUrl('/categList')
        this.toast.warning('Eliminación exitosa!', 'Operaciones con Registros')
      })
    }
  }


}
