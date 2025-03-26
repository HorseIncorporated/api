export class Car {
  public model: string;
  public year: number;
  public color: string;
  public mileage: number;
  public fuelType: string;
  constructor(
    model: string,
    year: number,
    color: string,
    mileage: number,
    fuelType: string
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.fuelType = fuelType;
  }
  public start(): string {
    return `${this.model} is starting.`;
  }
  public stop(): string {
    return `${this.model} is stopping.`;
  }
  public drive(distance: number): string {
    this.mileage += distance;
    return `${this.model} has driven ${distance} miles.`;
  }
  public refuel(amount: number): string {
    return `${this.model} has been refueled with ${amount} gallons of ${this.fuelType}.`;
  }
}
