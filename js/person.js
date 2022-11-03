var assert = require('assert');

/*
// 1. implementa una funzione "createPerson", che prenda 2 argomenti: name / age
//
//    The function should RITORNA UNA person Object che consiste delle 2 proprietà,
//      the object shall have a 'name' and an 'age' property.
//      Il valore di default di age è 18.
//
// 2. implementa la function "printPersons" which takes un parametro: array persone
//    a) persons should be an array of person objects (from step 1) // verificate che sia un array
//
//    b) La funzione deve stampare should print all persons from the array persons "nicely" as a formatted string
//       "Person is called XXX and is YYY years old".
//       You can use the console.log() function for this.
//
// 3. call the function with an array of 2person objects that you created with createPerson
 */

// object constructor function
function Person(name, age) {
    this.age = age;
    this.name = name;
}

// method createPerson (requirement .1)
function createPerson(name, age = 18) {
    if (name === undefined)
        throw new Error("invalid arguments");
    return new Person(name, age);
}

// method printPersons (requirement .2)
const onclick = function(functionRef){

}
const printPersons = function (array, delegate) {
    // COBOL < 1995
    // let i = 0;
    // while (i < array.length){
    //     result += (array[i].name + " is " + array[i].age + "years old")+"\n";
    //     i++;
    // }

    // 1995... [STANDARD]
    // for (let i=0; i < array.length; i++) {
    //     result += (array[i].name + " is " + array[i].age + "years old")+"\n";
    // }

    // 2015 >
    // for (const element of array) {
    //     result += (element.name + " is " + element.age + "years old")+"\n";
    // }

    // 2015 ... (Linq) MAP REDUCE
    const format = delegate === undefined ?
        (element) => element.name + " is " + element.age + "years old" + "\n" :
        (element) => delegate(element.name, element.age) + "\n";

    return array instanceof Array ?
        array
            .map(format)
            .reduce((current, prev) => current + prev) : "";
}

describe('personTests', function () {
    it('createPerson must return instance of Person', function () {
        const manuel = createPerson("Manuel", 25);
        assert.equal(manuel instanceof Person, true);
    })
    it('createPerson must return instance of Person even when no age is given', function () {
        const manuel = createPerson("Manuel");
        assert.equal(manuel instanceof Person, true);
        assert.equal(manuel.age, 18);
    })
    it('createPerson must throw when no arguments are given', function () {
        assert.throws(() => createPerson(), Error, "invalid arguments")
    })
    it('printPersons do something', function () {
        const array = [createPerson("Manuel", 30),
            createPerson("Giacomo", 28),
            createPerson("Luca", 10),
            createPerson("Gabriele", 100),
            createPerson("Nicolas", 22),
            createPerson("Youssif")];

        const result = printPersons(array);

        const expectedResult = "Manuel is 30years old\n" +
            "Giacomo is 28years old\n" +
            "Luca is 10years old\n" +
            "Gabriele is 100years old\n" +
            "Nicolas is 22years old\n" +
            "Youssif is 18years old\n";

        assert.equal(result, expectedResult);
    })
    it('printPersons do something with formatter', () => {
        const array = [createPerson("Manuel", 30),
            createPerson("Giacomo", 28),
            createPerson("Luca", 10),
            createPerson("Gabriele", 100),
            createPerson("Nicolas", 22),
            createPerson("Youssif")];

        // 1. arrow function assigned to const
        const formatter = (name, age) => name + " ha " + age + " anni";
        const badFormatter = (name, age) => "ciao " + name;

        // 2. traditional (anonymous) function
        const traditionalFormatter = function(){
            return  "anni";
        }

        let result = printPersons(array, traditionalFormatter);

        console.log(badFormatter("Antonio", 40));

        // 3. closure/callback func..
        result = printPersons(array,  (name, age) => name + " ha " + age + " anni");

        const expectedResult = "Manuel ha 30 anni\n" +
            "Giacomo ha 28 anni\n" +
            "Luca ha 10 anni\n" +
            "Gabriele ha 100 anni\n" +
            "Nicolas ha 22 anni\n" +
            "Youssif ha 18 anni\n";

        assert.equal(result, expectedResult);
    })
});
