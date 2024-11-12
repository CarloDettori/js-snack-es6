"use strict";
console.clear();

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
//array di bikes
let bikes = [
    {
        nome: "bike1",
        peso: 80,
    },
    {
        nome: "bike2",
        peso: 60,
    },
    {
        nome: "bike3",
        peso: 40,
    },
    {
        nome: "bike4",
        peso: 20,
    }

]

//variabile con la bici piu leggera (di default è la prima)
let lightBike = bikes[0]

//ciclo per confrontare le bikes
for (let i in bikes) {
    if (lightBike.peso > bikes[i].peso) {
        lightBike = bikes[i]

    }

}
console.log(lightBike)