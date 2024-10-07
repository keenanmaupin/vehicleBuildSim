// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// Define the interface for vehicles capable of towing
interface AbleToTow {
    // Declare the properties
    towingCapacity: number; // The maximum weight the vehicle can tow

    // Method to tow a vehicle, which can be a Truck, Motorbike, or Car
    tow(vehicle: Truck | Motorbike | Car): void;
}

// Export the interface
export default AbleToTow;
