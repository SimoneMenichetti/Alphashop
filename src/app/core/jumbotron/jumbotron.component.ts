import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit{

  // utilizzo della notazione input

  @Input()
  titolo: string = "";

  @Input()
  sottoTitolo: string = ""

  // variabile show

  @Input()
  show: boolean = true;

  constructor(){}

  ngOnInit(): void {

  }

}
