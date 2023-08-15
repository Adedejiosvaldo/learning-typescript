let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothinMuch: null = null;

// arrays
let colors: string[] = ["Red,green,Blue"];
let numberArray: number[] = [1];
let boolArray: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x":10}';
const cordinates: { x: string; y: number } = JSON.parse(json);
console.log(cordinates);

//Delayed Initialization
let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "greeb") {
    foundWord = true;
  }
}

//When inference doesnt work
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] >= 0) {
    numberAboveZero = numbers[index];
  }
}
