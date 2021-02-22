// tsc archivo.ts       => Compila el codigo una sola vez
// tsc archivo.ts -w    => Compila el codigo en modo watch. Espera a cambios en el archivo.


console.log("Hello World");

// TYPES 

var myString2: string = "Hello World 2"
var myString = "Hello World";       // Solo sera String a lo largo de la vida del programa.
// myString = 22;                   // No se puede cambiar los tipos.

var myNumber: number = 22;
var myBool: boolean = true;

var myVar: any = "Hello";
myVar = 22;

// STRINGS

document.write(myString);           // Imprime mensajes en html

// ARRAYS
var StringArray: string[] = ["hola", "hello"];
var NumberArray: number[] = [1, 2, 3];
var array: any[] = ["hola", "hello"];
array = [1, 2];

// TUPLE

var strNumTaple: [string, number] = ["hola", 1];

// VOID, UNDEFINED, NULL

// let myVarVoid: void = undefined;
// let myVarNull: null = null;
// let myVarUndefined: undefined = undefined;

// FUNTIONS 

function getSum(n1: number, n2: number): number {
    return (n1 + n2);
}

let mySum = function (n1: number | string, n2: number | string): number {

    if (typeof (n1) == 'string') {
        n1 = parseInt(n1);
    }
    if (typeof (n2) == 'string') {
        n2 = parseInt(n2);
    }
    return (n1 + n2);
}

// const suma = (n1: number, n2: number): number => n1 + n2;

function getName(firstName: string, lastName?: string): string { // ? parametro opcional
    return `${firstName} ${lastName}`
}
getName("Gabriel");

// Function voids
function myVoidFunc(): void {
    console.log(2);
}
myVoidFunc();

// Interfaces

interface ITodo {
    title: string;
    text: string;

}

function showTodo(todo: ITodo) {
    console.log(`${todo.title} ${todo.text}`)
}

showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
})

// CLASES 

class User {

    public name: string;
    protected age: number;
    private email: string;

    constructor(name) {
        this.name = name;
        this.email = null;
    }

    register() {
        console.log(`${this.name} is registered!`)
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`)
    }
}

var jay = new User('jay');

console.log(jay.register());

// HERENCIA - INHERITANCE 

class Member extends User {
    id: number;
    constructor(id: number, name: string) {
        super(name);
        this.id = id;
    }

    paidInvoice() {
        super.payInvoice();
    }
}


var gordon = new User('Gordon');

gordon.payInvoice();

getName("Gabriel", "Bencomo")
getSum(21, 21)

