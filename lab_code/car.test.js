const Car = require('./car');

const newCar = new Car("Mercedes Benz", 6000, "V8");

describe("access car properties", () => {

    test("can access manufacturer", () => {
        const expected = "Mercedes Benz";
        const actual = newCar.manufacturer;
        expect(actual).toBe(expected);
    });

    test("can access price", () => {
        const expected = 6000;
        const actual = newCar.price;
        expect(actual).toBe(expected);
    });

    test("can access engine type", () => {
        const expected = "V8";
        const actual = newCar.engineType;
        expect(actual).toBe(expected);
    });


});