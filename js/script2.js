//Les variables

/* var mot = "mot";
var decimal = 1.23;
var chiffre = 4;
var boolean = false;
var array = [];

console.log(typeof(mot));
console.log(typeof(decimal));
console.log(typeof(chiffre));
console.log(typeof(boolean));
console.log(typeof(array));

var t = decimal.toString();//fonction toString(); permet de convertir ma variable en texte

console.log(typeof(t)); */

// const sert à déclarer une constante qui sera accessible uniquement en lecture. Ici elle a une porté globale c a d que je peux l'appeler n'importe où dans mon script elle aure tjs la valeur "constante"
/* const CONSTANTE = "Constante"; */

/* CONSTANTE = 12 *//* ; *///Renvoi une erreur parce que contante déja définit dans le contexte global

//Début de condition
/* if (CONSTANTE === "Constante") {//Début de bloc local
    let CONSTANTE = 20;
    console.log(CONSTANTE); */
   
/* } *///fin de bloc local
/* var CONSTANTE = 20; */
/* console.log(CONSTANTE); */
/* 
if (CONSTANTE === "Constante") {
    let CONSTANTE = 1.23;
    console.log(CONSTANTE)
}

if (CONSTANTE === "Constante") {
    let CONSTANTE = false;
    console.log(CONSTANTE)
}


if (CONSTANTE === "Constante") {
    let CONSTANTE = 'garage';
    console.log(CONSTANTE)
}

if (CONSTANTE === "Constante") {
    let CONSTANTE = [];
    console.log(CONSTANTE)
} */

//= pour affecter une valeur
// == pour comparer que 2 valeurs sont identiques ex:7 et "7"
//=== pour vérifier que 2 valeurs sont identiques et du même type (ex: 7 et 7 (vrai() | ex: 7 et "7" (faux))
// < inférieur à
// > supérieur à
//>= supérieur ou égal
//<= inférieur ou égal
// != pour vérifier que 2 valeurs sont inégales 
//  !== pour vérifier que 2  valeurs sont strictement inégales (type)

const SOLEIL = 35;

if(SOLEIL > 28 ) {
    let SOLEIL = 30;
    console.log(SOLEIL);    
}

if (SOLEIL !== 28) {
    let SOLEIL = 30;
    console.log(SOLEIL);

} else if (SOLEIL != 34) {
    let  SOLEIL = 35;
    console.log(SOLEIL);
} 
else {
    let SOLEIL = 34;
    console.log(SOLEIL);
}

// parseInt perment de préciser que l'on attend un nombre en retour.

var age = parseInt(prompt ("Quel est votre âge ?"));
// alert(age);
 var majorite = 18;
 if (age >= majorite) {
    alert ("Bingo !");     
 } else {
     alert ("Dommage.");
     document.location.href = "http://www.bonnenuitlespetits.fr/";
 }

// parseFloat perment de préceser que l'on attend un nombre décimal en retour.

// var azerty = parseFloat(prompt ("Quel est votre âge ?"));
// alert(azerty);