// Les boucles
//Dans les parenthèses de la boucle for : départ ; condition ; incrémentationAu départ, j’affecte une valeur à ma variable. Cette valeur est un chiffre.Ma condition dit « tant que ce chiffre est inférieur à 100 ».
//Mon incrémentation consiste à ajouter +1 à chaque tour de boucle.Dans mes accolades, ce code sera exécuté à chaque tour de boucle, donc il sera exécuté 99 fois.
//La boucle WHILE est une autre manière d’écrire une boucle. Basée sur le même principe que laboucle for, ses instructions seront exécutées tant que la condition est remplie. La syntaxe de la boucle WHILE est plus proche de l’humain que celle de la boucle FOR même si la boucle FOR est très utilisée par les développeurs.Reprenons notre exemple du compteur de chiffre. Cette fois écrit en version WHILE: La boucle DO WHILE, est une boucle qui exécutera d’abord une première fois le code SANS tester la condition ; PUIS ensuite, n’exécutera le code que si la condition est remplie pour toutes les fois suivantes.

//1
// for(var monChiffre = 1; monChiffre < 100; monChiffre++) {
//     document.write(monChiffre + "<br>");
//}


//

//2
var monChiffre = 1;
while(monChiffre <= 100) {
    document.write (monChiffre + "<br>");

    monChiffre++;
// }



//3
//Moins usité
// var monChiffre = 1;
// do{
//     monChiffre +=1;
//     document.write("Ce code ne s'exécutera qu'une seule fois");
//     document.write(monChiffre + "<br>");
// }
// while (monChiffre <= 110) 

//Incrémentation
// var monChiffre = 1;
// monChiffre++ => monChiffre + 1;
// monChiffre-- => monChiffre - 1;

//

var mois = [
    "janvier.",
    "février.",
    "mars.",
    "avril.",
    "mai.",
    "juin.",
    "juillet.",
    "août.",
    "septembre.",
    "octobre.",
    "novembre.",
    "décembre."
];

for (let index = 0; index < mois.length; index++) {
    alert(" Nous sommes en " + mois[index]);    
}

// Push : pour ajouter un élément dans le tableau a la fin.
// Unshift : pour ajouter un élément dans le tableau au début.
// Pop: retire le dernier élément du tableau.
// Shift: retire le 1er élément du tableau.
