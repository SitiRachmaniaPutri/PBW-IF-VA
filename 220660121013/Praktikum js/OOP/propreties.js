// Membuat objek Car dengan properti brand, type, dan year
var Car = {
    brand: 'honda',
    type: 'mobilio',
    year: 2017
};

console.log(Car);

// Memperbarui properti objek yang telah dibuat
Car.brand = 'Toyota';
Car.type = 'Alphard';

// Menghapus properti year
delete Car.year;

// Menambah properti baru
Car.odometer = 100000;

console.log(Car);