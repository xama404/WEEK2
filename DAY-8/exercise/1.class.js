class Car {
    // properties
    color = ""
    roda = ""
    merk = ""
    sasis = ""

    //Object -> yangakan diproses dari properties, kitaubah properties menjadi sebuah object
    //constructor yang menerima paramaeter
    // yang ada di parameter didadapt dari si properties

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
    getinfo() {
        return `This car have ${this.color} ${this.roda} ${this.merk} ${this.sasis}`
    }
}