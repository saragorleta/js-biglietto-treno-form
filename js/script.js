document.getElementById("genera").addEventListener('click',
function() {

// definizioni delle variabili
  var prezzoFinale;
  var nome= document.getElementById('nome').value;
  var eta= document.getElementById('eta').value;
  var totKm= document.getElementById('km').value;

  var prezzoBigliettoPieno= 0.21 * totKm;
  var tipoOfferta='prezzo standard';

// definizioni delle condizioni
  if (eta=='minorenne'){
    prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 30/100);
    tipoOfferta='Sconto minorenne';
  }
  else if(eta=='over65'){
    prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 40/100);
    tipoOfferta='Sconto Silver';
  }
  else{
    prezzoFinale=prezzoBigliettoPieno;
    tipoOfferta='prezzo standard';
  }

// stampiamo i dati sul browser
  document.getElementById('nome-passeggero').innerHTML=' '+nome;
  document.getElementById('Offerta-applicata').innerHTML=tipoOfferta;
  document.getElementById('n-carrozza').innerHTML= Math.floor(Math.random()*9) +1;
  document.getElementById('codice-cp').innerHTML='codice';
  document.getElementById('costo-biglietto').innerHTML=prezzoFinale.toFixed(2)+' Euro';

  // per far apparire cliccando sul btn 'Genera'
  document.getElementById('biglietto').className='show';
}
);

document.getElementById("annulla").addEventListener('click',function() {
  // andiamo ad annullare le variabili all'interno del form (nome km eta)
  document.getElementById('nome').value='';
  document.getElementById('eta').value='';
  document.getElementById('km').value='';
  // andiamo ad annullare i dati all'interno del biglietto
  document.getElementById('nome-passeggero').innerHTML='';
  document.getElementById('Offerta-applicata').innerHTML='';
  document.getElementById('n-carrozza').innerHTML= '';
  document.getElementById('codice-cp').innerHTML='';
  document.getElementById('costo-biglietto').innerHTML='';

  // per far scomparire cliccando sul btn 'annulla'
  document.getElementById('biglietto').className='hidden';

}
);
