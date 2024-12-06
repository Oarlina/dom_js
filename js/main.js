
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


const box = document.createElement("div"); // la constante box instancie un nouvel objet htmlElement qui est représenter par div. 
box.classList.add("box"); // on rajoute la class box a classList

const board = document.querySelector("#board"); // on cree la constante board qui recupere la id board

let nb = 1;
for (let i = 1; i <= 10; i++)
    {
        const newBox = box.cloneNode();
        newBox.innerText = i; // rajoute du texte "1" a la constante box
        board.appendChild(newBox); // rajoute un element a la fin de la constant box

        newBox.addEventListener("click", function(){ // on rajoute l'evenement click sur les boites
            if (i == nb)
            {
                newBox.classList.add("box-valid");
                console.log(`Boite n° ${i} click! ${nb}`);
                if (nb == board.children.length)
                {
                    alert("Victoire !"); // afficher un message en haut de la page 
                }
                nb++;
            }else if (i > nb)
            {
                alert("Erreur, recommencez !"); // afficher un message en haut de la page 
                nb = 1;
                board.querySelectorAll(".box-valid").forEach (function(validBox){
                    validBox.classList.remove("box-valid");
                })
            }else 
            {
                console.log("Case déjà cliqué !");
            }
        })
}

shuffleChildren(board); // pour optimiser le code

