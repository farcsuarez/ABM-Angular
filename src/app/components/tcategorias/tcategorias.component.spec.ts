import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcategoriasComponent } from './tcategorias.component';

describe('TcategoriasComponent', () => {
  let component: TcategoriasComponent;
  let fixture: ComponentFixture<TcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
