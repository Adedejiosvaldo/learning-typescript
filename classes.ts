// Class -> Blue print or definiton, we dont call it directly
class Vehicle {
  drive(): void {
    console.log("Driver Driving");
  }

  honk(): void {
    console.log("Pim Pim");
  }
}

//Inheritance

// when we have a class that extends to
// another class,we can choose to overide
// some methods
class Car extends Vehicle {
  drive(): void {
    console.log("Waddup");
  }
}

const vehicle = new Car();
vehicle.drive();
vehicle.honk();
