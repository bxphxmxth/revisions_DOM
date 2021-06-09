//? ### 1. Récupération d'éléments
//* 1) Récupère le p avec les différentes façons vues en classe (1 variable par manière). Console log chacune des variables et observe.
let p1 = document.getElementsByTagName("p")[1];
console.log(p1);
let p2 = document.getElementsByClassName("pClass")[0];
console.log(p2);
let p3 = document.getElementById("pID");
console.log(p3);
let p4 = document.querySelector("p").nextElementSibling;
console.log(p4);
let p5 = document.querySelectorAll("p")[1];
console.log(p5);


//* 2)  - A partir du dernier li, récupère le premier li
let lastLi = document.querySelector("ul").lastElementChild;
let firstLi = lastLi.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
console.log(firstLi);

// Ou

// let premierLi = document.getElementsByTagName("li")[6].parentElement.firstElementChild;


//*     - A partir du premier li, récupère le texte du h2 
let h2txt = firstLi.parentElement.previousElementSibling;
console.log(h2txt.textContent);


//* "2) Récupérer des éléments"
//*     - A partir du h2 récupéré précédement, récupère la première div
let div1 = h2txt.parentElement.previousElementSibling;
console.log(div1);


//*     - A partir de la première div, récupère le deuxième li
let li2 = div1.nextElementSibling.lastElementChild.firstElementChild.nextElementSibling;
console.log(li2);

// Ou

// let myLi = div1.nextElementSibling.children[1].children[1];



//*     - A partir du deuxième li, récupère le contenu de la balise strong.
let strongB = li2.parentElement.parentElement.previousElementSibling.lastElementChild.firstChild;
console.log(strongB);


//? ### 2. Modifier le contenu d'un élément
//* 1) Remplace le contenu de la balise h4 par "L'animal préféré de Fanny c'est le crabe"

let animal = document.querySelector("h4");
animal.innerHTML = "L'animal préféré de Fanny c'est le crabe"
console.log(animal);

// Ou

// let div2 = document.querySelectorAll("div")[2].children[1].innerHTML = "L'animal préféré de Fanny c'est le crabe";



//* 2) Remplacez le contenu des li par vos aliments préférés

let tabLi = ["patates", "ecureuil"," pastèque", "melon", "kumquat","oeuf", "soja", "gruyère"];

let allLi = Array.from(document.querySelector("ul").children);
console.log(allLi);

for (let i = 0; i < allLi.length; i++){
     allLi[i].textContent = tabLi[i];
};

// Ou


//? ### 3. Créer, attacher et effacer un élément
//* 1) Dans la div id "point3", ajoutez un titre h2 contenant "3. Créer, attacher et effacer un élément"


let div3 = document.getElementById("point3");

let newH2 = document.createElement("h2");
newH2.textContent = "3. Créer, attacher et effacer un élément";
div3.appendChild(newH2);

//* 2)  - Dans la div id "point3", ajoutez un ul qui contient 8 li avec comme contenu vos fims préférés


let myMovies = ["Eternal Sunshine", "Addam's Family ", "But I'm a cheerleader", "Grease", "Freaky Friday", "La fabuleux destin d'Amélie Poulain", "The hours"];

let myLi;

myMovies.forEach(element => {
     myLi = div3.appendChild(document.createElement("li"));
     myLi.textContent = element;
});

let tabMyLi = Array.from(document.getElementsByTagName("li"));


//*     - Effacez le film que vous aimez le moins

tabMyLi.forEach(element => {
     if(element.textContent == "Freaky Friday"){
          element.remove();
     }
});


//! 3) En dessous de la div précédente, à l'aide d'une boucle, ajoutez un titre pour chaque gros point de matière vue en DOM (récupération d'élement, modifier un élément, créer et effacer un élément, get et setAttribute, eventListeners, event et event.target)

let tab3 = ["récupération d'élement", "modifier un élément", "créer et effacer un élément", "get et setAttribute", "eventListeners", "event et event.target"];



tab3.forEach(element => {
     let titre = document.body.insertBefore(document.createElement("h2"), div3)
     titre.textContent = element;
});


//* ### 4. get et setAttribute
//* 1) Récupérez l'img stockée dans la div id "point4" et ajoutez à cette image la classe "surprise" avec setAttribute

// let myImg = document.getElementsByTagName("img")[0];
// myImg.setAttribute("class", "surprise");



//* 2) Appliquez sur la balise strong l'id colorRed du CSS


//* 3) Récupérez la valeur de l'attribut class du premier p de ce document




//? ### 5. eventListener
//* 1) A partir de la div id "point3", récupérez la div id "point5". Appliquez sur le premier bouton un event listener qui au click lance une alert avec le contenu du premier titre h1 récupéré via DOM.

let div5 = div3.nextElementSibling.nextElementSibling;
let btn1 = document.querySelector("button");
let premierH1 = document.querySelector("h1");

btn1.addEventListener("click", ()=>{
     alert(premierH1.innerText)
})


//* 2) Chaque fois que vous cliquez sur le bouton "Click me 2", le p juste en dessous de ce bouton perd et regagne la classe "d-white".

let btn2 = document.querySelectorAll("button")[1];
let pUnderBtn = btn2.nextElementSibling;

btn2.addEventListener("click", () =>{
     pUnderBtn.classList.toggle("d-white")
     alert(pUnderBtn.classList);
})



//* 3) Pour chaque li de l'ul ".item-list", faites un console log du li sur lequel vous avez cliqué.

let monUl = document.getElementsByClassName("item-list")[0];
console.log(monUl);
let mesLiz = Array.from(monUl.children);
console.log(mesLiz);

mesLiz.forEach(element => {
     element.addEventListener("click", () =>{
          console.log(element.innerText);
     })
});

//* 4)  ["red", "green", "blue", "yellow"]
//*     Récupérez l'ul "#couleurs# à partir du titre "Modifier le contenu d'un élément"
let myColor = document.querySelectorAll("h2")[2];
let myUl = myColor.parentElement.parentElement.querySelector("#couleurs");
console.log(myUl);



//*     Assignez à chacun de ses li une couleur random contenue dans le tableau ci-dessus


let colorRandom = ["red", "green", "blue", "yellow"];

let lesLis = Array.from(myUl.children);
console.log(lesLis);

let random;

lesLis.forEach(element => {
     random = Math.floor(Math.random()*colorRandom.length);
     element.style.color = colorRandom[random];
});



//* ### 6. e.target
//* 1) Mettez un event listener click sur chacun des p de la div #point6. Si le contenu du p est click 1, mettez sur le p une bordure rouge, si le contenu est click 2, mettez le bg du p en jaune, si le contenu est click 3, mettez la color en vert, si le contenu est click 4, mettez un underline


let monEvent = Array.from(document.getElementById("point6").children[1].children)
console.log(monEvent);



monEvent.forEach(element => {
     element.addEventListener("click", (e) =>{
          if(e.target.innerText == "click 1"){
               e.target.style.border = "red solid 1px"
          }else if (e.target.innerText == "click 2"){
               e.target.style.backgroundColor = "yellow";
          }else if (e.target.innerText == "click 3"){
               e.target.style.color = "green";
          }else if (e.target.innerText == "click 4") {
               e.target.style.textDecoration = "underline";
          }
     })
});


//* 2) Générez 5 boutons numérotés dans la div #numeros. Au click de chacun des boutons, une alert doit apparaitre avec le contenu du bouton.

let divN5 = document.getElementById("numeros");
console.log(divN5);

let boutons = ["btn", "btn2", "btn3", "btn4", "btn5"];

let monB;

boutons.forEach(element => {
     monB = document.createElement("button");
     divN5.appendChild(monB);
     monB.innerText = element;
     monB.addEventListener("click", (e) =>{
          alert(e.target.innerText = "hey");
     })
});