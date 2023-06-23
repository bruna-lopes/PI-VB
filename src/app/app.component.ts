import { Component } from '@angular/core';

let valor = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PI-VB';
  valorCarrinho = 10;

  constructor() {}

  adicionarNoCarrinho(valorAdicionado: string) {
    this.valorCarrinho += +valorAdicionado;
    console.log('chamou?', this.valorCarrinho);
  }
}
