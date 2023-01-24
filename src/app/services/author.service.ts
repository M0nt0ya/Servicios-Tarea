import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { CreateAuthorDto, Author, UpdateAuthorDto } from '../entities/author';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorHttpServiceService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private httpClient: HttpClient) { }
  //Llama toda la lista
  getAuthor(): Observable<Author[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<Author[]>(url);
  }
  //Llama por id de la lista
  getOneAuthor(id: Author['id']): Observable<Author> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<Author>(url)
  }
  //Crea un id
  storeAuthor(author: CreateAuthorDto): Observable<Author> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<Author>(url, author)
  }
  //Actualiza por id
  updateAuthor(id: Author['id'], author: UpdateAuthorDto): Observable<Author> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<Author>(url, author)
  }
  //Elimina por id
  destroyAuthor(id: Author['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => {
      return response.rta;
    }))
  }
}




