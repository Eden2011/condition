"use strict";

let a=5;
let b=5;
let c=7;

switch(a){ //a est la valeur de référence
    case b:
        console.log("égal à b");//a=b 
        break;//permet de sortir d'une boucle
    case c:
        console.log("égal à c");
        break;
    default://si aucune condition n'est vraie, "egal à rien"
        console.log("égal à rien");
}
