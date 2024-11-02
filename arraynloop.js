// array bisa menggunakan new array / []
let items = new Array("buah", "mobil", "manusia");
document.getElementById("test").innerHTML = items;

const object = {
  nama: "kadakbonsai",
  age: 23,
  cars: new Array(
    {
      name: "Mercedes",
      models: new Array("Mustang", "Fiesta", "Focus"),
    },
    {
      name: "BMW",
      models: new Array("320", "X3", "X6"),
    },
    {
      name: "Yamaha",
      models: new Array("XSR155", "Mio J", "FocusHopus"),
    },
  ),
};

// lanjut besok di array n loop
