var heading = document.getElementById("title");
var button = document.getElementById("button");
var colorInput = document.getElementById("input");
var animalOutput = document.getElementById("output");

var pink = ["pig 🐷", "flamigo 🦩", "worm 🪱", "squid 🦑", "parrot 🦜"]
var red = ["bird 🐦", "lady bug 🐞", "crab 🦀", "lobster 🦞"]
var orange = ["orangutan 🦧", "fox 🦊", "tiger 🐯", "octopus 🐙", "butterfly 🦋", "shrimp 🦐"]
var yellow = ["baby chick 🐥", "cat 🐱", "leopard 🐆", "giraffe 🦒"]
var light_brown = ["deer 🦌", "goat 🐐", "camel 🐫", "sloth 🦥", "kangaroo 🦘", "hampster 🐹", "chipmunk 🐿️"]
var brown = ["monkey 🙉", "dog 🐶", "lion 🦁", "horse 🐴", "bison 🦬", "ox 🐂", "boar 🐗", "mammoth 🦣", "beaver 🦫", "hedgehog 🦔", "bat 🦇", "bear 🐻", "otter 🦦", "turkey 🦃", "rooster 🐓", "eagle 🦅", "owl 🦉", "snail 🐌", "scorpion 🦂"]
var green = ["peacock 🦚", "frog 🐸", "crocodile 🐊", "turtle 🐢", "lizard 🦎", "snake 🐍", "dragon 🐉", "sauropod 🦕", "t-rex 🦖", "caterpillar 🐛", "beetle 🪲", "cricket 🦗"]
var blue = ["whale 🐳", "dolphin🐬", "fish 🐟"]
var gray = ["gorilla 🦍", "wolf 🐺", "raccoon 🦝", "zebra 🦓", "water buffalo 🐃", "cow 🐄", "elephant 🐘", "rhinoceros 🦏", "hippopotamus 🦛", "mouse 🐭", "penguin🐧", "dodo 🦤", "seal 🦭", "shark 🦈", "koala 🐨", "panda 🐼", "skunk 🦨", "badger 🦡", "ram 🐏", "llama 🦙"]
var white = ["rabbit 🐇", "polar bear 🐻‍❄️", "chicken 🐔", "dove 🕊️", "swan 🦢"]

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
    output.innerHTML = "i guess you wanna be unique, so here is a unicorn 🦄"
  }

}

function restyle() {
  var randoRed = Math.random() * 255;
  var randoGreen = Math.random() * 255;
  var randoBlue = Math.random() * 255;
  var stringColor = "rgb(" + randoRed + "," + randoGreen + "," + randoBlue + ")";

  animalOutput.style.color = stringColor;

}
