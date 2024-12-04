

let list_ul = document.querySelector("ul"); // permet d'afficher la premiere liste ul avec ces noeuds
let list_li = document.querySelectorAll("li"); // renvoie une NodeList statique de toutes les listes li

list_li.forEach(function(element){ 
    // console.dir(element); // permet de connaitre les propriétés de element
    element.style.color = "deeppink"; // donne aux listes li une couleur rose foncé
}) 


//  console.log(list_li);