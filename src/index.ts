// Tipos Básicos
let age: number = 5;
const name: string = "Matheus";
const isValid: boolean = true;
let idk: any = 5;

idk = "agora sou uma string";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Matheus", "João", "Maria"];

// Tupla

const person: [string, number, boolean] = ["Matheus", 5, true];

// Lista de Tuplas

const people: [string, number][] = [
  ["Matheus", 5],
  ["João", 10],
  ["Maria", 15],
];

// Intersections

const produtId: string | number | boolean = "1";

//  Enum

enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
  Right = "Direita",
}

const direction = Direction.Left;

// Type Assertions
const produtName: any = "boné";

// let itemId = produtName as string;

let itemId = <string>produtName;

console.log(direction);
