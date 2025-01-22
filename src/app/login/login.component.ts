import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  // nuove variabili per User e Password

  userId: string = "";
  password: string = "";
  // nuova variabile per il controllo del tentativo di accesso

  titolo: string = "Accesso & Autenticazione";
  sottoTitolo: string = "Procedi ad inserire la userId e la Password";


  autenticator: boolean = true;
  errMsg: string = "Spiacente, la userid e/o la password sono errati!";


// costruttore con metodo ngOnInit

// code injection creazione di una variabile privata all'interno del costructior
  constructor(private route: Router) {}

  ngOnInit(): void {


  }

  // metodo gestAuth per l event click

  gestAuth = () : void => {


    console.log(this.userId);

    if(this.userId == "Pino" && this.password === "1234") {
      // utilizziamo il metodo navigate per far si che si possa accedere a tutte le rotte in maniera globale
      this.route.navigate(['welcome', this.userId]);
      this.autenticator = true;
    }

    else {
      this.autenticator = false;
    }
  }
}
