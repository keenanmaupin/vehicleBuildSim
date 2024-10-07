// index.ts

// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

// Function to create and add a truck (once implemented)
function createTruck() {
    try {
        const truck = new Truck(
            Cli.generateVin(),
            "red",
            "Ford",
            "F-150",
            2021,
            5000,
            120,
            [],
            10000
        );
        vehicles.push(truck);
    } catch (error) {
        console.error("Error creating truck:", error);
    }
}

// Function to create and add a car
function createCar() {
    try {
        const car = new Car(
            Cli.generateVin(),
            'blue',
            'Toyota',
            'Camry',
            2021,
            3000,
            130,
            []
        );
        vehicles.push(car);
    } catch (error) {
        console.error("Error creating car:", error);
    }
}

// Function to create and add a motorbike (once implemented)
function createMotorbike() {
    try {
        const motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
        const motorbike = new Motorbike(
            Cli.generateVin(),
            "black",
            "Harley Davidson",
            "Sportster",
            2021,
            500,
            125,
            motorbikeWheels
        );
        vehicles.push(motorbike);
    } catch (error) {
        console.error("Error creating motorbike:", error);
    }
}

// Create vehicles
// Uncomment the truck creation once implemented
// createTruck();
createCar();
// Uncomment the motorbike creation once implemented
// createMotorbike();

// Create a new instance of the Cli class
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();
