import { Injectable } from '@angular/core';


// annotazione injectable , i services si basano sulla code injection iniettando i servizi in altri elementi
@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  // creazione del metodo per la verifica dell autenticazione

  autentica = (userId: string, password: string) : boolean => {
    var retVar= (userId === 'Pino' && password === '1234') ? true : false ;
    if(retVar){
      sessionStorage.setItem("utente",userId);
    }
    return retVar;
  }
// utilizziamo l operatore ternario per ottenere se cio che abbiamo ottenuto dal sessionstorage dalla chiave utente non sarà null restituiremo il nome utente , senno sarà nulla
  loggedUser = () : string | null => (sessionStorage.getItem("utente")) ? sessionStorage.getItem("utente") : "";

  // metodo isLogged per restiuire un booleano

  isLogged = () : boolean => (sessionStorage.getItem("utente")) ?  true : false ;
}
