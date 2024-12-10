
// partie de compréhension 
let list_ul = document.querySelector("ul"); // permet d'afficher la premiere liste ul avec ces noeuds
let list_li = document.querySelectorAll("li"); // renvoie une NodeList statique de toutes les listes li

list_li.forEach(function(element){ 
    // permet de connaitre les propriétés de element
    console.dir(element); 
    // donne aux listes li une couleur rose foncé
    element.style.color = "deeppink";
}) 
//  console.log(list_li);

// Code lié à la page

function shuffleChildren(parent)
{
    let children = parent.children; // la constante children récupère l'enfant de parent
    let i = children.length, k, temp;
    while (i-- >0) //on boucle tant que i -1 est positif
    {
        k = Math.floor(Math.random()*(i+1)); // k récupère une valeur aléatoire sur i
        temp = children[k]; // il récupère temporairement la valeur à la position k
        children[k] = children[i]; // la valeur i prend la position k
        parent.appendChild(temp); // place l'élément qui etais a la postion k a la fin
    }
}
function showReaction (type, clickedBox){
    clickedBox.classList.add(type);
    if (type !== "success")
    {
        setTimeout (function(){
            clickedBox.classList.remove(type);
        },800);
    }
}

const box = document.createElement("div"); // la constante box instancie un nouvel objet htmlElement qui est représenter par div. 
box.classList.add("box"); // on rajoute la class box a classList

const board = document.querySelector("#board"); // on cree la constante board qui recupere la id board
let nbNombre = prompt("Entrer le nombre maximum à rechercher: ");
let dificulte = prompt("Voulez-vous la version difficile? (non ou oui)");
// let temps_jeu = [];
let sec=0; 
let min=0;

let timer = setInterval(function(){
    document.getElementById('timer').innerHTML= "Timer: " + min + " : " + sec; //affiche les minutes et le secondes
    if (sec>=60) // pour passer les 60 secondes en minute
    {
        min++;
        sec-=60;
    }
    sec++;
}, 1000);
    

if (nbNombre>1)
{
    let nb=1;
    timer; // pour que le timer commence quand le jeu est charger
    for (let i = 1; i <= nbNombre; i++)
        {
            timer;
            const newBox = box.cloneNode();
            newBox.innerText = i; // rajoute du texte "1" a la constante box
            board.appendChild(newBox); // rajoute un element a la fin de la constant box
    
            newBox.addEventListener("click", function() // on rajoute l'evenement click sur les boites
            { 
                if (i == nb)
                {
                    newBox.classList.add("box-valid");
                    console.log(`Boite n° ${i} click! ${nb}`);
                    if (nb == board.children.length)
                    {
                        // alert("Victoire !"); // afficher un message en haut de la page 
                        board.querySelectorAll(".box").forEach(function(box){
                            showReaction("success",box);
                        }); // remet toute les cases au depart
                        clearInterval(timer); // pour stopper le timer quand le jeu est gagner
                        // temps_jeu.push(timer);
                    }
                    if (dificulte == "oui")
                    {
                        shuffleChildren(board); // pour optimiser le code afin de mélanger les nombres
                    }
                    nb++;
                }else if (i > nb)
                {
                    // alert("Erreur, recommencez !"); // afficher un message en haut de la page 
                    showReaction("error", newBox);
                    nb = 1;
                    board.querySelectorAll(".box-valid").forEach(function(validBox){
                        validBox.classList.remove("box-valid");
                    }) // remet toute les cases au depart
                    shuffleChildren(board); // pour optimiser le code afin de mélanger les nombres
                }else 
                {
                    // console.log("Case déjà cliqué !");
                    showReaction("notice", '#timer');
                }
            })
        // document.getElementById('tableau').innerHTML = temps_jeu;
    }
    
    shuffleChildren(board); // pour optimiser le code afin de mélanger les nombres
}else{
    nbTest = prompt("Entrer le nombre maximum à rechercher(minimum 2): ");
}

