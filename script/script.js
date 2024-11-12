"use strict";
console.clear();

/*__________________________________________________________________________
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

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
console.log(lightBike)*/

/*________________________________________________________________________________
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let teams = [
    {
        nome: "juve",
        gol: 0,
        falli: 0,
    },
    {
        nome: "milan",
        gol: 0,
        falli: 0,
    },
    {
        nome: "inter",
        gol: 0,
        falli: 0,
    },
    {
        nome: "napoli",
        gol: 0,
        falli: 0,
    }

];

function giveRngToTeams(array) {
    for (let i in teams) {
        array[i].gol = generaNumeroRandom(5, 50);
        array[i].falli = generaNumeroRandom(1, 10);
    }
};

giveRngToTeams(teams);
console.log(teams);

let nomeFalli = [];

for (let i in teams) {
    nomeFalli.push(teams[i].nome)
    nomeFalli.push(teams[i].falli)
}
console.log(nomeFalli)
