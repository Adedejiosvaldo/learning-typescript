// arrays where each element is consistent

const carMakers: string[] = ["ford", "toyota", "Dodge"];
// Complex objects inside arrays

const date = [new Date()];

const carsByMake: string[][] = [[], ["Ferrari"], ["Camero"]];

// helps with inference when extracting values
const cars = carMakers[0];

// Prevents incompatible values
// carMakers.push(100);

// FLexible Arrays
const dateTime: (Date | string)[] = [new Date(), "Hello"];
