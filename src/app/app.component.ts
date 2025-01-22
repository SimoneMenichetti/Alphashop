import { Component } from '@angular/core';

// notazione @
@Component({

  selector: 'app-root', // selettore
  templateUrl: './app.component.html', // lato html
  styleUrls: ['./app.component.css']  // foglio di stile
})
export class AppComponent {
  title = 'alphashop'; // variabile title

  // nuova variabile
  saluti : string = "Benvenuti in Aphashop";

  // nuova variabile

  bollini : number = 1500;
}
