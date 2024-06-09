class Car {
    model = ""
    type = ""

    constructor (model, type) {
        this.model = model
        this.type = type
    }
    getInfo() {
        return `Mobil ini adalah : ${this.model}, denganType: ${this.type}`
    }
}

//class vehicle akan mewarisi properti dan metode seisinya dari clas Cars(parents)
//sehingga apa yang ada di class Cars dapat kita gunakan didalam class vehicle
//dan juga kita dapat menambahkan data baru sebagai input ketika kita mendefinisikan new vehicle
class Vehicle extends Car {
    constructor (model,type,batraiCapacity) {
        //support ini kita ambil dar class cars
        super(model,type)
        //merupakan tambahan dari vehicle
        this.batraiCapacity = batraiCapacity
    }

        getInfo() {
            return `${super.getInfo()} ${super.get}. kapasitas batrai adalah ${this.batraiCapacity}`
    }
}

const tesla = new Vehicle("Tesla", "X", 1)
//angka 1 untuk mengisi value batrai capasitas
console.log(tesla);