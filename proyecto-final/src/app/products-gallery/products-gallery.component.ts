import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.css']
})
export class ProductsGalleryComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProducts().subscribe((productos: Product[]) => {
      this.productos = productos;
    });
  }
}

