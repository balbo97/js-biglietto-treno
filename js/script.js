//NUMERO DI KILOMETRI 
let numero_kilometri = prompt('inserisci il numero di kilometri che vuoi percorrere')
console.log(numero_kilometri)

//ETA'
let anni = prompt('inserici la tua età')
console.log(anni);

// COSTO DEL BIGLIETTO IN BASE AI KILOMETRI CHE SI VUOLE PERCORRERE 
let costo_biglietto_km = numero_kilometri * 0.21
console.log(costo_biglietto_km);

// COSTO FINALE 
let costo_biglietto = '';


// MINORE DI 18 OPPURE OVER 65
if (anni < 18){
    costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.2
}
else if(anni >= 65){
    costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.4
}
else{
    costo_biglietto = costo_biglietto_km
}

// COSTO FINALE CON MASSIMO DUE DECIMALI VISIBILE IN console.log 
let n = costo_biglietto.toFixed(2)
console.log('(COSTO DEL BIGLIETTO)'+n)


