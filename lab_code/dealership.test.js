const Car = require('./car');
const Dealership = require('./dealership');


const car1 = new Car("Mercedes Benz", 6000, "V12");
const car2 = new Car("McLaren", 5000, "V8");
const car3 = new Car("BMW", 6500, "V10");

const dealership1 = new Dealership("Motor Getawayz", 5, [car1, car2, car3]);

describe("access dealership properties", () => {

    test("can access name", () => {
        const expected = "Motor Getawayz";
        const actual = dealership1.name;
        expect(actual).toBe(expected);
    });

    test("can access maximum number of cars", () => {
        const expected = 5;
        const actual = dealership1.maxNumberOfCars;
        expect(actual).toBe(expected);
    });

});


describe("dealership methods", () => {

    test("can count number of cars in stock", () => {
        const expected = 3;
        const actual = dealership1.countCars();
        expect(actual).toBe(expected);
    });

    test("can add a car to stock", () => {
        car4 = new Car("Ferrari", 8000, "V10");
        dealership1.addCar(car4);

        const expected = car4;
        const actual = dealership1.carsInStock[3];
        expect(actual).toBe(expected);
    });

    test("error given if at max capacity", () => {
        const car5 = new Car("Audi", 7500, "V10");
        const car6 = new Car("Peugeot", 5000, "V6");
        const expected = "The dealship is at max capacity!";
        try {
          dealership1.addCar(car5);
          dealership1.addCar(car6);
        } catch(error) {
          expect(error.message).toBe(expected);
        }
    });
    
    // test("can return an array containing each car's manufacturer", () => {
    //     const expected = new Array(["Mercedes Benz", "McLaren", "BMW", "Ferrari"]);
    //     const actual = dealership1.listOfManufacturers();
    //     expect(actual).toBe(expected);
    // });

});
