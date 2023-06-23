import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PI-VB';
  valorCarrinho: number = 0;
  itensSelecionados = 0;

  listaDeCards = [
    {
      titulo: 'Camiseta',
      subtitulo: 'Camiseta clássica azul e preta',
      preco: '100',
      imagem: '../assets/camiseta-1.jpg',
    },
    {
      titulo: 'Camiseta',
      subtitulo: 'Camiseta clássica azul e branca',
      preco: '100',
      imagem: '../assets/camiseta-2.jpg',
    },
    {
      titulo: 'Camiseta',
      subtitulo: 'Camiseta clássica branca e preta',
      preco: '100',
      imagem: '../assets/camiseta-3.jpg',
    },
    {
      titulo: 'Camiseta longa',
      subtitulo: 'Camiseta longa branca e preta',
      preco: '200',
      imagem: '../assets/camiseta-longa-1.jpg',
    },
    {
      titulo: 'Conjunto',
      subtitulo: 'Conjunto rosa e preto',
      preco: '300',
      imagem: '../assets/conjunto-1.jpg',
    },
    {
      titulo: 'Conjunto',
      subtitulo: 'Conjunto roxo e branco',
      preco: '300',
      imagem: '../assets/conjunto-2.jpg',
    },
    {
      titulo: 'Calça',
      subtitulo: 'Calça vermelha com branco',
      preco: '100',
      imagem: '../assets/calca-1.jpg',
    },
    {
      titulo: 'Vestido',
      subtitulo: 'Vestido azul e branco',
      preco: '200',
      imagem: '../assets/vestido-1.jpg',
    },
  ];

  adicionarNoCarrinho(valorAdicionado: string) {
    this.valorCarrinho += +valorAdicionado;
    this.itensSelecionados++;
  }

  limpar() {
    this.valorCarrinho = 0;
    this.itensSelecionados = 0;
  }

  constructor() {}
  ngOnInit() {}
}
