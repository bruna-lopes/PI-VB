import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}

  @Input() valorTotal = '';
  @Input() qntItens = '';

  limpar() {
    this.valorTotal = '0';
    this.qntItens = '0';
  }
}
