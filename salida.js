// tsc archivo.ts       => Compila el codigo una sola vez
// tsc archivo.ts -w    => Compila el codigo en modo watch. Espera a cambios en el archivo.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
// TYPES 
var myString2 = "Hello World 2";
var myString = "Hello World"; // Solo sera String a lo largo de la vida del programa.
// myString = 22;                   // No se puede cambiar los tipos.
var myNumber = 22;
var myBool = true;
var myVar = "Hello";
myVar = 22;
// STRINGS
document.write(myString); // Imprime mensajes en html
// ARRAYS
var StringArray = ["hola", "hello"];
var NumberArray = [1, 2, 3];
var array = ["hola", "hello"];
array = [1, 2];
// TUPLE
var strNumTaple = ["hola", 1];
// VOID, UNDEFINED, NULL
// let myVarVoid: void = undefined;
// let myVarNull: null = null;
// let myVarUndefined: undefined = undefined;
// FUNTIONS 
function getSum(n1, n2) {
    return (n1 + n2);
}
var mySum = function (n1, n2) {
    if (typeof (n1) == 'string') {
        n1 = parseInt(n1);
    }
    if (typeof (n2) == 'string') {
        n2 = parseInt(n2);
    }
    return (n1 + n2);
};
// const suma = (n1: number, n2: number): number => n1 + n2;
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
getName("Gabriel");
// Function voids
function myVoidFunc() {
    console.log(2);
}
myVoidFunc();
function showTodo(todo) {
    console.log(todo.title + " " + todo.text);
}
showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});
// CLASES 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.email = null;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var jay = new User('jay');
console.log(jay.register());
// HERENCIA - INHERITANCE 
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.paidInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new User('Gordon');
gordon.payInvoice();
