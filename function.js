function favoriteAnimal(animal) {
  return animal + "ini animal favorite ku";
}

function add7(number) {
  return number + 7;
}
function multiply(number1, number2) {
  let a = number1;
  let b = number2;
  let product = number1 + number2;
  return product;
}
function capitalize(text) {
  let sentence = text;
  let first = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  return first;
}
function lastLetter(letter) {
  return letter.charAt(letter.length - 1);
}

let lastWord = (letter) => letter.charAt(letter.length - 1);

console.log(favoriteAnimal("monyet"));
console.log(add7(4));
console.log(multiply(3, 4));
console.log(capitalize("ezy anak pintar, suka ngocok"));
console.log(lastLetter("anjayy"));
console.log(lastWord("sifat baikmu yang orang tau"));
