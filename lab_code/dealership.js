// create a Dealership class with properties:
    // title
    // max number of cars
    // cars in stock

const Dealership = function(name, maxNumberOfCars, carsInStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = carsInStock;
}


Dealership.prototype.countCars = function(){
    return this.carsInStock.length;
}

Dealership.prototype.addCar = function(newCar){
    if (this.carsInStock.length < this.maxNumberOfCars){
        this.carsInStock.push(newCar);
    } else {
        throw new Error("The dealship is at max capacity!");
    }
}

Dealership.prototype.listOfManufacturers = function(){
    // return new Set(this.carsInStock.reduce((accumulator, car) => accumulator.concat(car.manufacturer), []));
    return this.carsInStock.map((car) => {
        return car.manufacturer;
    });
}

Dealership.prototype.findCarsByManufacturer = function(manufacturer){
    return this.carsInStock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.totalValue = function(){
    return this.carsInStock.reduce((accum, car) => accum + car.price, 0);
}


module.exports = Dealership; 