/*
 Operazioni tra array
 Scrivi un programma che dati:
 - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
 - il tipo di operazione aritmetica da effettuare, una delle seguenti:
   addizione
   sottrazione
   moltiplicazione
   divisione
 Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

 Esempio:
   Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
   Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

 Consigli:
 Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

 //  -> map(function (e) { return e + 1; })
 // forEach
*/

function operazioniTraArray(array1, array2, operazione) {

    if (array1.length !== array2.length){
        throw new Error("gli array devono avere la stessa lunghezza");
    }

    var results = new Array(array1.length);

    for (var i = 0; i < array1.length; i++){
        switch (operazione) {
            case "addizione":
                results[i] = array1[i] + array2[i];
                break;
            case "sottrazione":
                results[i] = array1[i] - array2[i];
                break;
            case "moltiplicazione":
                results[i] = array1[i] * array2[i];
                break;
            case "divisione":
                if (array2[2] !== 0) {
                    results[i] = array1[i] / array2[i];
                } else {
                    results[i] = NaN;
                }
                break;
            default:
                throw new Error("operazione non gestita");
        }
    }

    return results;
}

function operazioniTraArray(array1, array2, operazione) {

    if (array1.length !== array2.length) {
        throw Error("Gli array devono avere la stessa lunghezza");
    }

    return array1.map((value, index) => {

        if (typeof value !== "number" || typeof array2[index] !== "number") {
            throw Error("gli array devono avere solo numeri");
        }

        switch (operazione) {
            case "addizione":
                return value + array2[index];
            case "sottrazione":
                return value - array2[index];
            case "moltiplicazione":
                return value * array2[index];
            case "divisione":
                return value / array2[index];
            default:
                throw Error("operazione non consentita")
        }
    })
}

var assert = require('assert');

describe('operazioniTraArrayTests', function () {
    it('realCase', function () {
        operazioniTraArray([3, 7, 2, 5, 8, 1, 2, 5, 6, 4], [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], "addizione");

        [12, 10, 3, 9, 15, 7, 7, 15, 7, 9].forEach((x, index) => {
            assert.equal(r[index], x);
        })
    });
    it('addizione', function () {
        var r = operazioniTraArray([1, 1], [2, 2], "addizione");
        assert.equal(r[0], 3);
        assert.equal(r[1], 3);
    });
    it('sottrazione', function () {
        var r = operazioniTraArray([1, 1], [2, 2], "sottrazione");
        assert.equal(r[0], -1);
        assert.equal(r[1], -1);
    });
    it('moltiplicazione', function () {
        var r = operazioniTraArray([1, 1], [2, 2], "moltiplicazione");
        assert.equal(r[0], 2);
        assert.equal(r[1], 2);
    });
    it('divisione', function () {
        var r = operazioniTraArray([1, 1], [2, 2], "divisione");
        assert.equal(r[0], 0.5);
        assert.equal(r[1], 0.5);
    });
    it('operazione non consentita', function () {
        assert.throws(() => operazioniTraArray([1, 1], [2, 2], "flfdlkdlk"), Error, "operazione non gestita");
    });
    it('gli array devono avere la stessa lunghezza', function () {
        assert.throws(() => operazioniTraArray([1, 1, 1], [2, 2], "addizione"), Error, "gli array devono avere la stessa lunghezza");
    });
    it('solo numeri', function () {
        assert.throws(() => operazioniTraArray([1, "a"], [2, {}], "addizione"), Error, "gli array devono avere solo numeri");
    });
});
