const add = (a: number, b: number): number => {
  return a + b;
};

// When there is no annotation for the returning value
// typescript infers a type for us

const addWithNoInference = (a: number, b: number) => {
  return a + b;
};
