document.getElementById("Genera").addEventListener('click',
function() {

// definizioni delle variabili
  var prezzoFinale;
  var nome= document.getElementById('nome')value;
  var eta= document.getElementById('eta')value;
  var totKm= document.getElementById('km')value;

  var prezzoBigliettoPieno= 0.21 * totKm;
  var tipoOfferta='prezzo standard';


  if (eta<18){
    prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 30/100);
    tipoOfferta='Sconto minorenne';
  }
  else if(eta>65){
    prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 40/100);
    tipoOfferta='Sconto Silver';
  }
  else{
    prezzoFinale=prezzoBigliettoPieno;


// stampiamo i dati sul browser
    document.getElementById('nome-passeggero').innerHTML=nome;
    document.getElementById('Offerta-applicata').innerHTML=tipoOfferta;
    document.getElementById('n-carrozza').innerHTML= Math.floor(Math.random()*9) +1;
    document.getElementById('codice-cp').innerHTML=;
    document.getElementById('costo-biglietto').innerHTML=prezzo finale.toFixed(2)+ ' '+ 'Euro';






}
);
