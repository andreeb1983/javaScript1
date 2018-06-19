var moi = 34;
var moi2 = "39";
var moi3 = 1.57;
var moi4 = true;
var moi5 = ["Andrée", 95, "été"];
var moi6 = { nom: "Andrée", prénom: "Laurent"};

const Moi = 1.57;
//variable vraie
if (moi3 <=1.57) { 
    let moi3 = 1.57;
    console.log(moi3);
} 
//variable fausse
if (moi3 > 1.57) {
    let moi3 = 1.55;
    console.log(moi3);
} 

for (let index = 0; index < moi5.length; index++) {
   console.log(moi5[index]);    
}

// var t = "";
// for (const key in moi6) {
//     if (moi.hasOwnProperty(key)) {
//         t =  t + moi6[key];
//         document.write(t);
//     }
// }

 var moi7 = 0;
 while (moi7 < moi5.length) {
     document.write(moi5 + "<br>");
    moi5++; 
 }

//  var moi8 = 0;
//  while (moi8 < moi6.length) {
//      document.write(moi6 + "<br>");
//     moi6++; 
//  }



