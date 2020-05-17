
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {Produto} from "./Produto"

@Injectable({
    providedIn: 'root'
  })

export class ProdutoService{

    private url = 'https://localhost:5001/viagem/produtos';

        
    constructor(private httpClient: HttpClient) { 

      this.httpOptions.headers.set('Access-Control-Allow-Origin', '*');

    }

    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    getProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(this.url)
          .pipe(
            retry(2),
            catchError(this.handleError))
      }



    // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}