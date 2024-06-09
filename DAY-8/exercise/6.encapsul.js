//menambahkan pagar untuk menahan penganntian mode oleh kijang
//penambahan pagar pada isRunning dan model type

class Cars {
    
    #model = "";
    #type = "";

    #isRunning = false;

    constructor(model,type) {
        this.#model = model;
        this.#type = type;
    }

    start(){
        this.#isRunning = true;
    }

    stop(){
        this.#isRunning = false;
    }

    getInfo(){
        return `${this.#model} ${this.#type} now running is ${this.#isRunning}`
    }
}

const carM = new Cars("BMW", "Classic");
carM.model = "Kijang"
carM.start()
console.log(carM.getInfo());

