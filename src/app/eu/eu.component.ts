import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Roselino';

  sobrenome: string = 'Alvarado';

  idade: number = (25)

  comidas: string[];

  final: string = 'Resident Evil'

  cidade: string = 'Rio de Janeiro'

  constructor() { 
    this.comidas = ['Macarrão', 'cafe','arepa', 'pizza', 'Stars Wars'
  ];
  }

  ngOnInit(): void {
  }

}
