import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.module';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  //Llama toda la lista
  getAll(): Observable<ProductModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);
  }
  //Llama por id de la lista
  getOne(id: ProductModel['id']): Observable<ProductModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel>(url)
  }
  //Crea un id
  store(product: CreateProductDto): Observable<ProductModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductModel>(url, product)
  }
  //Actualiza por id
  update(id: ProductModel['id'], product: UpdateProductDto): Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product)
  }
  //Elimina por id
  destroy(id: ProductModel['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => {
      return response.rta;
    }))
  }
}