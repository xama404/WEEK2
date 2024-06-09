class Car {
    // properties
    color = ""
    roda = ""
    merk = ""
    sasis = ""

    constructor(color, roda, merk, sasis) { 
        // isi dari this itu didapat dari paramaeter
        // untuk penamaan dari this. ini bebas, tapi valuenya ngmabil dari properties
        this.color = color
        this.roda = roda
        this.merk = merk
        this.sasis = sasis
    }

    //ini method /perintah yang akan kitajalankan
    // this merupakan sebuah fungsi untuk kita gunakan sebagai penanda yang didapat dari si contructor
    getInfo() {
        // penggunaan petik 1 (') dan petik 2 (") dianggap hanya text saja
        // penggunaan backtick (`) akan dibaca ada kode yang dipanggil sepeti ${this.roda}
        return `color : ${this.color}, roda : ${this.roda}, Merk : ${this.merk}, sasis : ${this.sasis}`
    }
}

const car1 = new Car("red", "4", "Toyota", "Plastik")
console.log(car1.getInfo());

// npm = node langsung ke folder/nama file
// node exercise/2.object.js