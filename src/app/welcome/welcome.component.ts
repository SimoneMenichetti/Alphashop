import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//  1 implementiamo un interfaccia chiamata OnInit per implementare il metodo ngOnInit
export class WelcomeComponent implements OnInit {

  // creiamo un costruttore

  utente: string = "";

  // variabile titolo e sottotitolo
  titolo: string = "Benvenuti in Alphashop";
  sottoTitolo: string = "Visualizza le offerte del giorno";

  // usiamo l'injection creando una var privata con il metodo activatedroute
  constructor (private route: ActivatedRoute)  {}

  // metodo ngOnInit implementato
  ngOnInit(): void {

    // popoliamo la variabile utente passando lo snapshot ed i params[] passando il param userid
    this.utente = this.route.snapshot.params["userId"];
  }

}
