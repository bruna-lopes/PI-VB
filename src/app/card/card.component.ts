import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() preco: string = '';
  @Input() imagem: string = '';
  @Input() onClick: ((preco: string) => void) | undefined;

  ngOnInit(): void {}
}
