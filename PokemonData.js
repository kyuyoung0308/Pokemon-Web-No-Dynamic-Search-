//var namePokemon;
var pokemonName = ["Bulbasaur", "Ivysaur ", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
  "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pideotto", "Pidgeot", "Rattata", "Raticate"];
var type = ["Grass Poison ", "Grass Poison ", "Grass Poison ", "Fire ", "Fire ", "Fire Flying ", "Water ", "Water ", "Water ",
  "Bug ", "Bug ", "Bug Flying ", "Bug Poison ", "Bug Poison ", "Bug Poison ", "Normal Flying ", "Normal Flying ", "Normal Flying ", "Normal ", "Normal "];



function searching() {
  //If the search bar is empty it will return empty

  var first = document.getElementById("first");


  //document.querySelectorAll("#first p3");
  var toDelete = document.querySelectorAll("#first p3")[0];
  if (toDelete != undefined){
    first.removeChild(toDelete);
  }

  if (document.getElementById("names").value == ""){
    return;
  }

  var par = document.createElement("p3");

  //var text = document.createTextNode("hello there");
  var text = [];
 


  var listPokemonMatch = searchNameId();
  var b = searchNumberId();
  console.log(listPokemonMatch);

  for (var x = 0; x < listPokemonMatch.length; x++) {
    var text2 = [];
    text[x] = document.querySelectorAll("#" + listPokemonMatch[x].toLowerCase() + " p");

    console.log(text[x]);
    console.log(listPokemonMatch[x]);

    //loops through all p tags 
    for (var index = 1; index < text[x].length; index++) {

      //text = document.querySelectorAll("#" + a + " p");
      //console.log(text[1]);
      //console.log(text.length);

      //= document.createTextNode(text[1]);
      //par.appendChild(text2);
      //first.appendChild(par);
      text2[index] = document.createTextNode(text[x][index].textContent);
      console.log(text2[index]);
      par.appendChild(text2[index]);
      first.appendChild(par);
    }
  }
}
//par.appendChild(text2);

//first.appendChild(par);




//HELLO

function searchNameId() {
  var listName = [];
  var listType = [];
  var hasNumber = /\d/;
  var counter = 0, counterArray = 0;
  namePokemon = document.getElementById("names").value;

  while (counter < 20 && counterArray < 20) {

    if (pokemonName[counterArray].length >= namePokemon.length) {
      if (pokemonName[counterArray].toLowerCase().includes(namePokemon.toLowerCase())) {
        listName[counter] = pokemonName[counterArray].toLowerCase();
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

  listName[0] = pokemonName[numberPokemon - 1];

  return listName;
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
  } else if (namePokemon.length > 21) {
    alert("Enter Less Than 20 Characters Please.")
    return;
  }

  while (counter < 5 && counterArray < 20) {

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
    "Their Types are: \n" + listType);

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



