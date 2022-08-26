import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contatos } from 'src/app/models/contatos';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato:Contatos;
  nome:string;
  telefone:number;
  genero: string;
  data_nacimento: string;
  data: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.contato=nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.data_nacimento = this.contato.data_nacimento;
        
  }

}
