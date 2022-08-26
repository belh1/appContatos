import { Injectable } from '@angular/core';
import { Contatos } from '../models/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  //armazenar uma array de contatos,inicializando com vazio
  private _contatos:Contatos[]= []

  constructor() {
    let contato = new Contatos("Teste", 123,"masculino","2022-08-10");
    this.inserir(contato);
   }

  public get contatos(): Contatos[]{
    return this._contatos
  }
  //
  public inserir(contato: Contatos): void{
    this._contatos.push(contato);
  }
}
