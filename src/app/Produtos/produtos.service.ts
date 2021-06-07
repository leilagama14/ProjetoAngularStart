import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';
import { Observable } from 'rxjs';


@Injectable()
export class ProdutoService {

constructor(private http: HttpClient) { }

    //Endereço do enpoint criado a partir do json-server. Arquivo "produtos.json" localizado na pasta raiz
    protected UrlServiceV1: string = "http://localhost:3000/produtos";

    obterProdutos() : Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlServiceV1);
    }
}