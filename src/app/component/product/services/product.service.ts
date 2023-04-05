import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { People, Product } from '../model/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrlProduct: string = "http://localhost:3001/products"
  baseUrlPeople: string = "http://localhost:3001/people"


  @Output() information: string = "Cadastro de Produtos";

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get('http://localhost:3001/people').pipe(
      map((res: any) => {
        return res
      }),
      catchError((error: People) => this.errorHandler(error))
    );
  }

  createPeople(product: People): Observable<People> {
    return this.http.post<People>('http://localhost:3001/people', product).pipe(
      map((res: any) => {
        return res
      }),
      catchError((error: any) => this.errorHandler(error))
    );
  }

  getProducts() {
    return this.http.get(this.baseUrlProduct).pipe(
      map((res: any) => {
        return res
      }),
      catchError((error: any) => this.errorHandler(error))
    );
  }

  getByIdProducts(id: number) {
    const url = `${this.baseUrlProduct}/${id}`
    console.log("🚀 ~ file: product.service.ts:48 ~ ProductService ~ getByIdProducts ~ url:", url)
    return this.http.get(url).pipe(
      map((res: any) => {
        return res
      }),
      catchError((error: any) => this.errorHandler(error))
    );
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:3001/products', product).pipe(
      map((res: any) => {
        return res
      }),
      catchError((error: any) => this.errorHandler(error))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    console.log("🚀 ~ file: product.service.ts:66 ~ ProductService ~ updateProduct ~ product:", product)
    const body = {
      description: product.description,
      price: product.price,
      active: product.active,
    }
    return this.http.put<Product>(`http://localhost:3001/products/${product.id}`, body).pipe(
      map((res: Product) => res ),
      catchError((error: any) => this.errorHandler(error))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.baseUrlProduct}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert('Ocorreu um erro!')
    return EMPTY //Observable vazio
  }
}
