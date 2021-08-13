//button for text//

var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener("click", displayInfo);  

var q1a1 = document.getElementById("q1a1")
q1a1.addEventListener("click", displayInfoo)

var displayInfo = document.getElementById("environ")
var displayInfoo = document.getElementById("labor")

function displayInfo(){
  //This variable must be in the function or it will not work

  displayInfo.innerHTML = " Fast fashion companies purposely hire labor in foreign countries that do not have proper work protections so that they can maximize their profits. They pay their workers poorly; the workplaces have unsafe conditions. According to Vox, If a piece of clothing costs you $19.99, that means the person who made it was paid 19 cents.";
} 

function displayInfoo(){
  //This variable must be in the function or it will not work

  displayInfoo.innerHTML = " Fast fashion companies produce clothing consisted of materials that are unreliable. When these clothes inevitably deteriorate, the clothes end up clogging multiple places on the planet, from landfills to oceans. According to the New York Times, “More than 60 percent of fabric fibers are now synthetics, derived from fossil fuels, so if and when our clothing ends up in a landfill (about 85 percent of textile waste in the United States goes to landfills or is incinerated), it will not decay.”";
} 


//shop generator//
var factList = [
  "Shein",/*0*/
  "Fashion Nova",/*1*/
  "Forever 21",/*2*/
  "H&M"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
