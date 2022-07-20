import { Injectable } from '@angular/core';
import { IProduto, produto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
produtos: IProduto[] = produto;

  constructor() { }
  getAll(){
    return this.produtos;
     }
  getOne(produtoId: number){
  return this.produtos.find(produto => produto.id = produtoId)
  }
}
