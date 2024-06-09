//polimorpism kita bisa extend class yang mengextend classsebelumnya
class Car {    
    constructor (model, type) {
        this.model = model;
        this.type = type;
    }
    drive(){
        return `${this.model} ${this.type}`;
    }
}

class Vehicle extends Car {
    constructor (model,type,batraiCapacity) {        
        super(model,type);     
        this.batraiCapacity = batraiCapacity;
    }
    getInfo(){
        return `${super.drive()}. kapasitas batrai adalah ${this.batraiCapacity}`;
    }
}

class Obama extends Vehicle {
    driveObama() {
        return `ini dari obama yang extend elektrik car : ${super.getInfo()}`;
    }
}

const car = new Car ("toyota","baka")
const vehicle = new Vehicle ("Tesla","6",123)
const obama = new Obama ("Nissan","GTR",9999)

console.log(car.drive());
console.log(vehicle.getInfo());
console.log(obama.driveObama());
