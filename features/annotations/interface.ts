const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true, 
  summary(): string {
    return this.name;
  },
};

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
