const add = (a: number, b: number): number => {
  return a + b;
};

// When there is no annotation for the returning value
// typescript infers a type for us
const addWithNoInference = (a: number, b: number) => {
  return a + b;
};

// Anon function
function divide(a: number, b: number): number {
  return a / b;
}

// assigning a function to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

// VOid -> No return Value
const logger = (message: string): void => {
  console.log(message);
};

// The Never type -> when we dont expect a function to return anything
const throwError = (message: string): never => {
  throw new Error(message);
};

const foreCast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(foreCast);
