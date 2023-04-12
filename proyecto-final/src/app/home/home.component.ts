import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Product } from '../product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProducts().subscribe((productos: any[]) => {
      this.productos = productos;
    });
  }
  deleteProduct(nombre: string): void {
    const producto = this.productos.find(p => p.nombre === nombre);
    if (!producto) {
      console.error(`No se encontró el producto con nombre ${nombre}.`);
      return;
    }
    this.productosService.deleteProduct(producto).subscribe(() => {
      this.productos = this.productos.filter(p => p !== producto);
    });
  }
  

}
