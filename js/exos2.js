// var moi = 34;
// var moi2 = "39";
// var moi3 = 1.57;
// var moi4 = true;
// var moi5 = ["Andrée", 95, "été"];
// var moi6 = { nom: "Andrée", prénom: "Laurent"};

// const Moi = 1.57;
// //variable vraie
// if (moi3 <=1.57) { 
//     let moi3 = 1.57;
//     console.log(moi3);
// } 
// //variable fausse
// if (moi3 > 1.57) {
//     let moi3 = 1.55;
//     console.log(moi3);
// } 

// for (let index = 0; index < moi5.length; index++) {
//    console.log(moi5[index]);    
// }

// var t = "";
// for (const key in moi6) {
//     if (moi.hasOwnProperty(key)) {
//         t =  t + moi6[key];
//         document.write(t);
//     }
// }



//  var moi8 = 0;
//  while (moi8 < moi6.length) {
//      document.write(moi6 + "<br>");
//     moi6++; 
//  }


// les boucles for sont utilisées dans la plupart des cas ou on ne connait pas le nombre de récupération. s'écrit for(var maVariable = 0; maVariable < 12; maVariable++ ou maVariable--).

// var mois = [1,2,3,4];
// mois [2]

// for (var i = 0; i< mois.length; i++){
//     alert("génial ! ");
//     document.write(mois[i]);
// }


// var result = "";
// moisObjet = {
//     nom: "éden",
//     email:"test@test.com",
// }

//for est boucle la plus adapter pour explorer les tableaux d'objets.
// for (var i in moisObjet) {
//     result = result + moisObjet[i];
    //result += moisObjet[i]; (écriture simplifiée)    
// }
// document.write(result);<p></p>

// les boucles while sont les plus adapter quand on ne connait pas le nombre de répétition.

// var mois = [0,1,2,3];
// while (mois <= mois.length) {
//     mois++;
// }
// document.write(mois);

//la boucle while.

// var mois = 0;
// var result = "";
// do{
//     mois = mois+ 1;
//     result + result + mois;
//     alert("execution !");
// }while (mois < 5);

// document.write(result);
// console.log(result);


/**
 * Manipuler le DOM
 */

//  var div = document.getElementById('maDiv');
 //alert(div);

//  var classe = document.getElementsByClassName('maClass');
 //alert(classe);

//  var name = document.getElementsByName('samba');
 //alert(name);

//  var imgs = document.getElementsByTagName('img');
//  for (var i = 0; i < imgs.length; i++) {
    //alert("Element n° " +(i + 1) + ": " + imgs[i]);     
//  }

// var query = document.querySelector('#maDiv .maClasse p');
// var queryAll = document.querySelectorAll('#maDiv .maClasse p');

// alert(query.innerHTML);
// alert(queryAll.lenght;
// alert(queryAll[0].innerHTML);

//Le lien entre parenthèses est celui défini  dans lattribut id de notre a (Ex: <a href="#" id="lien>lien<a/> ")
// Liens est une variable qui est stockée <a href="#" id="lien>lien<a/>
// var liens = document.getElementById('lien');
// var hrefs = liens.getAttribute('href');

// alert(hrefs);

// liens.setAttribute('href', 'https://google.gp');
// alert(liens);


// Ajoute une classe à la div maDiv
// div.className = 'blue';

// Création d'une variable classes qui contient nos classes
// var classes = document.getElementsByClassName('maClasse').className;

//  Création d'un tableau vide qui va contenir mes nouvelles classes
// var nouvellesClasses = [];

// La méthode split() permet de diviser (découper) le résultat en plus petit morceaux. Ici je défini la division sur l'espace.
// classes = classes.split(' ');

// for(var i =0; i < classes.lenght; i++) {
//     if (classes[i]) {
//         nouvellesClasses.push(classes[i]);
//     }
// }

// alert (nouvellesClasses);









 //HTML -> parent
 //HEAD -> body -> enfant de html
 //

 /**************************************************************************************Correction  ************************************************** */

 /**

 * Il est possible d’écrire des commentaires dans notre code JS, les commentaires sont des lignes qui ne seront pas interprétées. Elles servent uniquement à aider le développeur à se repérez et

éventuellement informer ses collègues de ce qu’il a fait. Autrement dit, documenter le code.

 */

// mon commentaire



/*

 mes commentaires sur plusieurs lignes

*/



/**

 * Les Variables

 * «Emplacement de stockage nommé qui peut contenir des données pouvant être modifiées pendant l'exécution du script. Chaque variable a un nom qui l'identifie de façon unique à l'intérieur de son niveau de portée.» Plus simplement, une variable est une zone en mémoire du système, qui sert à conserver une valeur.

 * 

 * Les variables sont des sortes de boîtes dans lesquelles on stock des données. Une fois les données stockées dans cette variable, nous pouvons manipuler le contenu de cette variable, le contenu est appelé la «valeur».

 * 

 * Pour déclarer une variable on utilise le mot clé «var». Le signe « = » permet d’affecter la variable d’une valeur. Ainsi chaque fois que l’on manipulera une variable cela veut dire que l’on manipule son contenu, donc sa valeur. Pour faire comprendre à notre machine que l’on utilise une variable et non du texte brut on écrit la variable sans quottes ni guillemets.

 */

// var monMessage= 'Coucou !';

// alert(monMessage);// Affichera son contenu DONC 'Coucou !'

// alert('monMessage');// Affichera 'monMessage' car se trouve entre quottes



// Nous pouvons stocker plusieurs sortes de données dans les variables

// var monPrenom = "Pierre";

// alert(monPrenom) ; // affichera Pierre

// var monAge = 27;// les chiffres ne prennent pas de quottes

// var monAge = prompt('Quel âge as-tu ?'); // Ici j’affecte la valeur que l’internaute rentrera dans le champ généré par prompt

// var monPrenom = "Marie"; // Ici Marie prendra la place de Pierre dans la variable

// alert(monPrenom) ; // affichera Marie



// En Javascript comme dans tous les langages de programmation il existe plusieurs types de données. La fonction typeof() permet d’obtenir le type d’une donnée.

/**

 * Les nombres simples sont dits «integer» et les nombres à virgule sont dits «float» ou «double». On remarquera que lorsqu’on affecte un nombre, on ne met pas de quottes ni de guillemets.

 */

// var a = 36 ;

// alert(typeof(a)) ; // Affichera «number»



// Les chaines de caractères (textes): Les chaines de caractères ou textes sont appelés «string».

// var a = "Salut !" ;

// alert(typeof(a)) ; // Affichera « string »



/**

 * Une donnée a toujours une valeur, c'est-à-dire qu’elle est soit VRAIE soit FAUSSE (true ou false). Si var = 0, sa valeur est considérée comme FALSE, Si var = 1, ou n’importe quelle autre valeur (‘salut’ ou autre..), sa valeur est considérée comme TRUE.

 */

// var a = true;

// var b = false;

/****************************************************************************************************************************************************/



/**

 * Les Boucles

 * La boucle for utilisé dans la plupart des cas ou on connait le nombre de répetition. S'écrit for(var maVariable = 0; maVariable < 12; maVariable++ ou maVariable--)

 */

// var monTableau = [1,2,3,4];



// for(var i = 0; i < monTableau.length; i++){

//   document.write(monTableau[i]);

// }



// Boucle while elle est plus dans les cas ou on ne connait pas le nombre de répetiton

// var maVariable = [0,1,2,3];



// while (maVariable <= maVariable.length) {

//   maVariable++;

// }

// document.write(maVariable);

// var maVariable = 0;

// var resultat = "";

// do{

//   maVariable = maVariable + 1;

//   resultat = resultat + maVariable;

//   alert("execution avant la boucle !!");

// }while (maVariable < 5);



// document.write(resultat);

// console.log(resultat);



// var result = "";

// monTableauObjet = {

//   nom: "samba",

//   email: "test@test.fr"

// }

// Boucle la plus adapter pour explorer les tableaux d'objets

// for(var i in monTableauObjet){

//   result = result + monTableauObjet[i];

//   // result += monTableauObjet[i];// Ecriture simplifié

// }

// document.write(result);

/****************************************************************************************************************************************************/



/**

 * Les Constantes

 */

/****************************************************************************************************************************************************/

/**

 * Les opérateurs de comparaison

 * Lorsqu’on pose une condition, pour que l’ordinateur comprenne que la condition est valide ou invalide. Le résultat de cette condition est forcément true ou false.

 * Exemple dans le cas précédent, notre condition était if(question == 'masculin');

 * Si la condition est remplie, le résultat sera true.

 * Si la condition n’est pas remplie, le résultat sera false.

 * Le résultat est donc un booléen.

 * Les opérateurs de comparaison permettent de tester, l’égalité ou la différence entre deux données.

 * Tous les tests sont à placer dans la condition if entre les deux parenthèses.

 */

// Égal (==) Renvoie true si les valeurs des données sont égales.

// if(3 == var1);

// if("3" == var1);

// if(3 == '3');



// Différent (!=) Renvoie true si les valeurs des données ne sont PAS égales.

// if(var1 != 4);

// if(var2 != "3");



// Strictement égal (===) Renvoie true si les valeurs des données sont égales ET du même type.

// if(3 === var1);



// Strictement différent (!==) Renvoie true si les valeurs des données ne sont PAS égales et/ou PAS du même type.

// if(var1 !== "3");

// if(3 !== '3');

// Plus grand que (>) Renvoie true si la valeur de gauche est plus grande que la valeur de droite.

// if(var2 > var1);

// if("12" > 2);

// Plus grand ou égal (>=) Renvoie true si la valeur de gauche est plus grande ou égale à lavaleur de droite.

// if(var2 >= var1);

// if(var1 >= 3);

// Plus petit que (<) Renvoie true si la valeur de gauche est plus petite que la valeur de droite.

// if(var1 < var2);

// if("12" < var2);

// Plus petit ou égal (<=) Renvoie true si la valeur de gauche est plus petite ou égale à la valeur de droite.

// if(var1 <= var2);

// if(var2 <= 5);



/**

 * Les opérateurs logiques

 * Tous les langages de programmation utilisent les opérateurs logiques. Ce sont des opérateurs qui viennent se placer entre deux évaluations dans une condition.

 * Exemple, je veux tester si mon internaute est masculin ET qu’il a plus de 18 ans.

 * Cela s’écrira :

 */

// if(sexe == "masculin" && age > 18);

/****************************************************************************************************************************************************/



/**

 * Les Conditions

 * Nous appelons structure conditionnelle, la structure qui permet de réaliser une (ou plusieurs) instruction(s) sous certaines conditions. Elle nécessite l'utilisation des opérateurs de comparaisons et parfois des opérateurs logiques.

 * En Javascript, comme dans tout langage de programmation, nous utilisons des conditions.

 * Mettre une condition consiste à écrire du code Javascript, qui ne sera exécuté que si la personne rempli la condition.

 * Par exemple, à l’aide du code JS, je demande à l’internaute quel est son sexe. Celui-ci me répond « féminin » ou « masculin ».

 * S’il répond « féminin », j’affiche un background rose.

 * Sinon, s’il répond « masculin », j’affiche un background bleu.

 * Sinon s’il répond autre chose, ou ne répond pas, je lui écris « tu ne réponds pas à la question ».

 */

// if (ma condition) // voir les opérateurs de comparaisons, sous-chapitre suivant.

// { // Ne pas oublier l’ouverture d’accolade

//   alert("Mon message"); // Ce code ne sera exécuté QUE si la condition est remplie, NE PAS OUBLIER LE POINT VIRGULE

// } // IMPORTANT : Ne pas oublier les ACCOLADES, JAMAIS de POINT VIRGULE à la fermeture d’accolades

// else if (mon autre condition)

// {

//   alert("mon autre message");

// }

// else

// {

//   alert("mon dernier message");

// }



// var question = prompt("De quel sexe es-tu ?") ;

// // Ici la réponse de l’internaute sera stockée dans la variable « question ».

// if(question == "masculin") //Si la valeur de la variable est « masculin »

// {

//   alert("Tu es un homme"); // Ce code ne sera exécuté QUE si la réponse est « masculin »

// }

//   else if(question == "feminin") // Sinon si la valeur de la variable est « feminin »

// {

// alert("mon autre message"); // Le code précédent ne sera pas exécuté et CE code ci ne sera exécuté QUE si la réponse est « féminin »

// }

// else // Sinon, c'est-à-dire dans tous les autres cas.

// {

//   alert("Ah .. Tu n’es ni l’un ni l’autre ?");

// }



/****************************************************************************************************************************************************/



 