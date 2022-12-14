var heading = document.getElementById("title");
var button = document.getElementById("button");
var colorInput = document.getElementById("input");
var animalOutput = document.getElementById("output");

var pink = ["pig π·", "flamigo π¦©", "worm πͺ±", "squid π¦", "parrot π¦"]
var red = ["bird π¦", "lady bug π", "crab π¦", "lobster π¦"]
var orange = ["orangutan π¦§", "fox π¦", "tiger π―", "octopus π", "butterfly π¦", "shrimp π¦"]
var yellow = ["baby chick π₯", "cat π±", "leopard π", "giraffe π¦"]
var light_brown = ["deer π¦", "goat π", "camel π«", "sloth π¦₯", "kangaroo π¦", "hampster πΉ", "chipmunk πΏοΈ"]
var brown = ["monkey π", "dog πΆ", "lion π¦", "horse π΄", "bison π¦¬", "ox π", "boar π", "mammoth π¦£", "beaver π¦«", "hedgehog π¦", "bat π¦", "bear π»", "otter π¦¦", "turkey π¦", "rooster π", "eagle π¦", "owl π¦", "snail π", "scorpion π¦"]
var green = ["peacock π¦", "frog πΈ", "crocodile π", "turtle π’", "lizard π¦", "snake π", "dragon π", "sauropod π¦", "t-rex π¦", "caterpillar π", "beetle πͺ²", "cricket π¦"]
var blue = ["whale π³", "dolphinπ¬", "fish π"]
var gray = ["gorilla π¦", "wolf πΊ", "raccoon π¦", "zebra π¦", "water buffalo π", "cow π", "elephant π", "rhinoceros π¦", "hippopotamus π¦", "mouse π­", "penguinπ§", "dodo π¦€", "seal π¦­", "shark π¦", "koala π¨", "panda πΌ", "skunk π¦¨", "badger π¦‘", "ram π", "llama π¦"]
var white = ["rabbit π", "polar bear π»ββοΈ", "chicken π", "dove ποΈ", "swan π¦’"]

button.addEventListener("click", generate);
button.addEventListener("click", restyle);

function generate() {
  var input = colorInput.value;

  if (input == "pink") {
    output.innerHTML = pink[Math.floor(Math.random() * pink.length)];
  }

  else if (input == "red") {
    output.innerHTML = red[Math.floor(Math.random() * red.length)];
  }

  else if (input == "orange") {
    output.innerHTML = orange[Math.floor(Math.random() * orange.length)];
  }

  else if (input == "yellow") {
    output.innerHTML = yellow[Math.floor(Math.random() * yellow.length)];
  }

  else if (input == "light brown") {
    output.innerHTML = light_brown[Math.floor(Math.random() * light_brown.length)];
  }
  else if (input == "brown") {
    output.innerHTML = brown[Math.floor(Math.random() * brown.length)];
  }

  else if (input == "green") {
    output.innerHTML = green[Math.floor(Math.random() * green.length)];
  }

  else if (input == "blue") {
    output.innerHTML = blue[Math.floor(Math.random() * blue.length)];
  }

  else if (input == "gray") {
    output.innerHTML = gray[Math.floor(Math.random() * gray.length)];
  }

  else if (input == "white") {
    output.innerHTML = white[Math.floor(Math.random() * white.length)];
}

  else {
    output.innerHTML = "i guess you wanna be unique, so here is a unicorn π¦"
  }

}

function restyle() {
  var randoRed = Math.random() * 255;
  var randoGreen = Math.random() * 255;
  var randoBlue = Math.random() * 255;
  var stringColor = "rgb(" + randoRed + "," + randoGreen + "," + randoBlue + ")";

  animalOutput.style.color = stringColor;

}
