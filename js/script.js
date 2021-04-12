var arrCognomi = ["Ubaldo", "De Rossi", "Rosa"];

var cognome = prompt("Inserisci cognome.");
arrCognomi.push(cognome);
arrCognomi.sort();
for(var i = 0; i < arrCognomi.length; i++){
  elementoCognome = arrCognomi[i];
  
  var elementoCognomeHTML = document.getElementById("lista").innerHTML;
  document.getElementById("lista").innerHTML = elementoCognomeHTML + "<li>" + elementoCognome + "</li>";  
}

