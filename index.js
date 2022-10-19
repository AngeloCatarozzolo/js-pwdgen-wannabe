//Chiedi all'utente il suo nome
const name = prompt("Inserisci il nome");
//Chiedi all'utente il suo cognome
const surname = prompt("Inserisci il cognome");
//Chiedi all'utente il suo colore preferito
const color = prompt("Inserisci il colore");
//infine scrivi sulla pagina NomeCognomeColorepreferito76
const pasword = name + surname + color + 76

document.querySelector("h1").innerHTML = pasword 
