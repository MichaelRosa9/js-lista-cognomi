var arrCognomi = ["Ubaldo", "De Rossi", "Rosa"];

var cognome = prompt("Inserisci cognome.");
arrCognomi.push(cognome);

arrCognomi.sort();

for(var i = 0; i < arrCognomi.length; i++){
  elementoCognome = arrCognomi[i];
  
  //procedura per far stampare l'arrai sottoforma di lista nell'html
  var elementoCognomeHTML = document.getElementById("lista").innerHTML;
  document.getElementById("lista").innerHTML = elementoCognomeHTML + "<li>" + elementoCognome + "</li>";  
}

//posizionamento nome utente
var posizioneCognome = cognome.indexOf(arrCognomi);

document.getElementById("posizione").innerHTML = cognome + " é " + (posizioneCognome + 1);

