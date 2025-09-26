"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Básicos
let age = 5;
const name = "Matheus";
const isValid = true;
let idk = 5;
idk = "agora sou uma string";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ["Matheus", "João", "Maria"];
// Tupla
const person = ["Matheus", 5, true];
// Lista de Tuplas
const people = [
    ["Matheus", 5],
    ["João", 10],
    ["Maria", 15]
];
// Intersections
const produtId = '1';
//  Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
//# sourceMappingURL=index.js.map