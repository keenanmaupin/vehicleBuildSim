// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  started: boolean;

  // Constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [new Wheel(), new Wheel()], // Default to 2 new Wheel objects if not provided
    started: boolean = false,
  ) {
    // Call the constructor of the parent class, Vehicle
    super(); // Call the parent constructor if Vehicle has properties to initialize
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements; if not, create 2 new default Wheel objects
    if (wheels.length !== 2) {
      console.log('Motorbike wheels must have exactly 2 wheels');
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }

    this.started = started; // Initialize the started property
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Implement the start method
  start(): void {
    this.started = true;
    console.log(`Motorbike ${this.make} ${this.model} has started!`);
  }

  // Override the printDetails method from the Vehicle class
  printDetails(): void {
    super.printDetails(); // Call the parent class's printDetails method

    // Log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    // Optionally log wheel details if needed
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
