// Class -> Blue print or definiton, we dont call it directly
class Vehicle {
  //   color: string = "red";
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  //MEthod 2 of declaring constructor

  constructor(public color: string) {}

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
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log();
  }
}

const vehicle = new Car(4, "red");
vehicle.drive();
vehicle.honk();

// Modifier (they restrict access) -> PUblic,private and protected
// PUblic -> This method can be called anywhere,any time
// Private -> THis method can only be called by other methods in the class
// Protected -> This method can be called onl

class House {
  color: string;
  public build(): void {
    console.log("Get Building");
  }

  private moveIn(): void {
    console.log("Yay ,Home is complete");
  }

  familyMoveIn(): void {
    this.moveIn();
  }
}

const duplex = new House();
duplex.familyMoveIn();
