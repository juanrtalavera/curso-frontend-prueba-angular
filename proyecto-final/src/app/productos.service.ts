import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }  

  saveProducts(products: Product[]): Observable<Product[]> {
    return this.http.put<Product[]>(this.productsUrl, products);
  }  
}

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}
