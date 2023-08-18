const drink: { name: string; carbonated: boolean; sugar: number } = {
  name: "brandy",
  carbonated: true,
  sugar: 30,
};

// Tuple Form
const pepsi: [string, boolean, number] = ["brandy", true, 40];

// Array wourld be
const pepsiArrray: (string | boolean | number)[] = ["brandy", true, 40];

// working with types
type Drink = [string, boolean, number];
const limca: Drink = ["Limca", false, 40];
