const Car = require('./car');
const Dealership = require('./dealership');

const car1 = new Car("Mercedes Benz", 6000, "V12");
const car2 = new Car("McLaren", 5000, "V8");
const car3 = new Car("BMW", 6500, "V10");

const dealership1 = new Dealership("Motor Getawayz", 5, [car1, car2, car3]);

console.log(dealership1.countCars());

// console.log(dealership1.listOfManufacturers());