var namePokemon;
var pokemonName=["Bulbasaur", "Ivysaur", "Venasaur", "MegaVenasaur", "Charmander", "Charmeleon", "Charizard", "MegaCharizardX", "MegaCharizardY", "Squirtle", "Wartortle", "Blastoise", "MegaBlastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pideotto", "Pidgeot", "Rattata", "Raticate"];
var type =["Grass Poison", "Grass Poison", "Grass Poison", "Grass Poison", "Fire", "Fire", "Fire Flying", "Fire Dragon", "Fire Flying", "Water", "Water", "Water", "Water",
"Bug", "Bug", "Bug Flying", "Bug Poison", "Bug Poison", "Bug Poison", "Normal Flying","Normal Flying","Normal Flying", "Normal", "Normal"];
function searchName() {
  var list = [];
  var counter = 0, counterArray = 0;
  namePokemon = document.getElementById("names").value;

  while(counter<5 && counterArray <20){
    if (pokemonName[counterArray].length() >= namePokemon.length()){
    if (pokemonName[counterArray].includes(namePokemon)){

       // Add pokemonName[counterArray] to list
       // counter++;
    }
  }
 counterArray++;

  }
  alert("pokemon"+ namePokemon);

}
function searchNumber(){

}
