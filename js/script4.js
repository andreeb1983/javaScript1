/**
 * // == pour comparer que 2 valeurs sont identiques ex:7 et "7"
//=== pour vérifier que 2 valeurs sont identiques et du même type (ex: 7 et 7 (vrai() | ex: 7 et "7" (faux))
// < inférieur à
// > supérieur à
//>= supérieur ou égal
//<= inférieur ou égal
// != pour vérifier que 2 valeurs sont inégales 
//  !== pour vérifier que 2  valeurs sont strictement inégales (type)

Opérateurs logiques
&& -> AND (et)
|| -> OR (ou)
! -> NOT (non)
 */

 var t = "qqchose";
 var r = 12;
//Si t est identique et de meme type que "qqchose" et  que r est égal et du meme type que 1 on écrit "qqchose" sinon on écrit r.
// if ((t === "qqchose")) && (r === 1) { 
//     document.write(t); /* Ne s'execute que si les deux conditions sont vraies */
// }else {
//     document.write(r),/* Ne s'execute que si l'une des conditions sont fausses */
// }

// Si t est identique et du meme type que "qqchose" ou que r est égal et du meme type que number  on écrit r.
//  if ((t === qqchose) || (r === number)) {
//      document.write(r);
//  } else {

// } document.write("Erreur !");

var t = false;

if (!t) {
    document.write('t');
}
//reviens à écrire

if(t === false)
    document.write('r');
}