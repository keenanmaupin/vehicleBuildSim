// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number; // Diameter of the wheel
  private tireBrand: string; // Brand of the tire

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter; // Initialize diameter
    this.tireBrand = tireBrand; // Initialize tire brand
  }

  // Getter method for the diameter property
  getDiameter(): number {
    return this.diameter; // Return diameter
  }

  // Getter method for the tireBrand property
  getTireBrand(): string {
    return this.tireBrand; // Return tire brand
  }
}

// Export the Wheel class
export default Wheel;
