import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      const newProduct = this.addProduct();
      this.productosService.getProducts().subscribe(products => {
        products.push(newProduct);
        this.productosService.saveProducts(products).subscribe(() => {
          this.router.navigate(['/']);
        });
      });
    }
  }

  public addProduct(): { id: number, title: string, price: number, imageUrl: string } {
    return {
      id: 0,
      title: this.addForm.controls['nombre'].value,
      price: this.addForm.controls['precio'].value,
      imageUrl: this.addForm.controls['imagen'].value
    };
  }
}
