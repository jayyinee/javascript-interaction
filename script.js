var heading = document.getElementById("title");
var button = document.getElementById("button");
var colorInput = document.getElementById("input");
var animalOutput = document.getElementById("output");

var pink = ["pig U+1F437", "flamigo U+1F9A9", "worm U+1FAB1", "squid U+1F991", "parrot U+1F99C"]
var red = ["bird U+1F426", "lady bug U+1F41E", "crab U+1F980", "lobster U+1F99E"]
var orange = ["orangutan U+1F9A7", "fox U+1F98A", "cat U+1F431", "tiger U+1F42F", "octopus U+1F419", "butterfly U+1F98B", "shrimp U+1F990", "giraffe U+1F992"]
var yellow = ["baby chick U+1F423", "deer U+1F98C", "goat U+1F410	", "camel U+1F42B", "sloth U+1F9A5", "kangaroo U+1F998"]
var brown = ["leopard U+1F406", "monkey U+1F435", "dog U+1F436", "lion U+1F981", "horse U+1F434", "bison U+1F9AC", "ox U+1F402", "boar U+1F417", "mammoth U+1F9A3", "chipmunk U+1F43F", "beaver U+1F9AB", "hedgehog U+1F994", "bat U+1F987", "bear U+1F43B", "otter U+1F9A6", "turkey U+1F983", "rooster U+1F413", "eagle U+1F985", "owl U+1F989", "snail U+1F40C", "scorpion U+1F982"]
var green = ["peacock U+1F99A", "frog U+1F438", "crocodile U+1F40A", "turtle U+1F422", "lizard U+1F98E", "snake U+1F40D", "dragon U+1F409", "sauropod U+1F995", "t-rex U+1F996", "caterpillar U+1F41B", "beettle U+1FAB2", "cricket U+1F997	"]

button.addEventListner("click", autoGenerate);
button.addEventListener("click", autoRestyle);

function autoGenerate() {
  var input = input.value;

  if (input =="pink") {
    output.innerHTML = pink[Math.floor(Math.random() * pink.length)];
  }

  else if (input =="red") {
    output.innerHTML = pink[Math.floor(Math.random() * red.length)];
  }

  else if (input =="orange") {
    output.innerHTML = pink[Math.floor(Math.random() * orange.length)];
  }

  else if (input =="yellow") {
    output.innerHTML = pink[Math.floor(Math.random() * yellow.length)];
  }

  else if (input =="brown") {
    output.innerHTML = pink[Math.floor(Math.random() * yellow.brown)];
  }

  else if (input =="green") {
    output.innerHTML = pink[Math.floor(Math.random() * green.length)];
  }

}

function autoRestyle() {
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var colorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

}
