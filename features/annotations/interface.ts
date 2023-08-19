const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const fetchFUnction = (vehicle: Vehicle): void => {
  console.log(vehicle.broken);
};
