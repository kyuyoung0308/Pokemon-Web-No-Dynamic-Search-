//var namePokemon;


//var text = document.createTextNode("hello there");
var par = document.createElement("p3");
var text = [];

text = document.querySelectorAll("#"+bulbasaur+" p");
console.log(text[1]);
console.log(text.length);
var first = document.getElementById("first");
var text2 =[]; //= document.createTextNode(text[1]);
//par.appendChild(text2);
//first.appendChild(par);

for (var index = 1; index < text.length; index++) {
  text2 [index] = document.createTextNode(text[index].textContent);
  par.appendChild(text2[index]);
  first.appendChild(par);
}


//par.appendChild(text2);

//first.appendChild(par);




//HELLO
var pokemonName = ["Bulbasaur ", "Ivysaur ", "Venusaur ", "Charmander ", "Charmeleon ", "Charizard ", "Squirtle ", "Wartortle ",
  "Blastoise ", "Caterpie ", "Metapod ", "Butterfree ", "Weedle ", "Kakuna ", "Beedrill ", "Pidgey ", "Pideotto ", "Pidgeot ", "Rattata ", "Raticate "];
var type = ["Grass Poison ", "Grass Poison ", "Grass Poison ", "Fire ", "Fire ", "Fire Flying ", "Water ", "Water ", "Water ",
  "Bug ", "Bug ", "Bug Flying ", "Bug Poison ", "Bug Poison ", "Bug Poison ", "Normal Flying ", "Normal Flying ", "Normal Flying ", "Normal ", "Normal "];

  function searchNameId() {
    var listName = [];
    var listType = [];
    var hasNumber = /\d/;
    var counter = 0, counterArray = 0;
    namePokemon = document.getElementById("names").value;
  
    while (counter < 5 && counterArray < 20) {
      console.log(counter);
      console.log(counterArray);
      if (pokemonName[counterArray].length >= namePokemon.length) {
        if (pokemonName[counterArray].toLowerCase().includes(namePokemon.toLowerCase())) {
          listName[counter] = pokemonName[counterArray];
          listType[counter] = type[counterArray];
  
          counter++;
          console.log(pokemonName[counterArray]);
        }
      }
      counterArray++;
    }  
    return listName;
  }

  function searchNumberId() {
    var numberPokemon;
    var listName = [];
    var listType = [];
    numberPokemon = document.getElementById("numbers").value;
  
    if (numberPokemon < 1 || numberPokemon > 20 || isNaN(numberPokemon)) {
      
      alert("Please enter a number between 1-20.");
      return;
    }
  
    listName[0] = pokemonName[numberPokemon - 1];

 
  }

  function searchName() {
  var listName = [];
  var listType = [];
  var hasNumber = /\d/;
  var counter = 0, counterArray = 0;
  namePokemon = document.getElementById("names").value;

 
  if (parseInt(namePokemon) || hasNumber.test(namePokemon)) {
    alert("Please Enter ONLY Alphabetical Characters.");
    return;
  }else if (namePokemon.length > 21){
    alert("Enter Less Than 20 Characters Please.")
    return;
  }

  while (counter < 5 && counterArray < 20) {
    console.log(counter);
    console.log(counterArray);
    if (pokemonName[counterArray].length >= namePokemon.length) {
      if (pokemonName[counterArray].toLowerCase().includes(namePokemon.toLowerCase())) {
        listName[counter] = pokemonName[counterArray];
        listType[counter] = type[counterArray];

        counter++;
        console.log(pokemonName[counterArray]);
      }
    }
    counterArray++;
  }
  alert("The Top Pokemon From Your Search Were: \n" + listName + "\n" +
    "Their Types are: \n"  + listType);

}
function searchNumber() {
  var numberPokemon;
  var listName = [];
  var listType = [];
  numberPokemon = document.getElementById("numbers").value;

  if (numberPokemon < 1 || numberPokemon > 20 || isNaN(numberPokemon)) {
    alert("Please enter a number between 1-20.");
    return;
  }

  listName[0] = pokemonName[numberPokemon - 1];
  listType[0] = type[numberPokemon - 1];

  alert("The Top Pokemon From Your Search Were: \n" + listName + "\n" +
    "Their Types are: \n" + listType);

}



