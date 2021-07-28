"use strict";
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.staticMethod = function () {
        return 10;
    };
    return Persona;
}());
var person1 = new Persona("Juan");
console.log(person1.getName());
console.log(Persona.staticMethod());
