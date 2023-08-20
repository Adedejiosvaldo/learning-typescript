const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return this.name;
  },
};

const drink: { name: string; carbonated: boolean; sugar: number } = {
  name: "brandy",
  carbonated: true,
  sugar: 30,
};

interface Summary {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const fetchFUnction = (vehicle: Vehicle): void => {
  console.log(vehicle.broken);
};

fetchFUnction(oldCivic);
