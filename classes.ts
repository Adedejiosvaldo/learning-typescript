// Class -> Blue print or definiton, we dont call it directly
class Vehicle {
  drive(): void {
    console.log("Driver Driving");
  }

  honk(): void {
    console.log("Pim Pim");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
