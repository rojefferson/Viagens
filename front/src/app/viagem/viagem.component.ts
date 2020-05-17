import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../Produto.service"
import {Produto} from "../Produto"

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  constructor(private produtoServ : ProdutoService) { }

  produtos : Produto[];


  ngOnInit(): void {
    this.getProdutos();
  }


  getProdutos(){
    this.produtoServ.getProdutos().subscribe( (prod:Produto[]) =>{
      this.produtos = prod;
    });
  }

}
