### 1. Récupération d'éléments
1) Récupère le p avec les différentes façons vues en classe (1 variable par manière). Console log chacune des variables et observe.

2)  - A partir du dernier li, récupère le premier li
    - A partir du premier li, récupère le texte du h2 "2) Récupérer des éléments"
    - A partir du h2 récupéré précédement, récupère la première div
    - A partir de la première div, récupère le deuxième li
    - A partir du deuxième li, récupère le contenu de la balise strong.

### 2. Modifier le contenu d'un élément
1) Remplace le contenu de la balise h4 par "L'animal préféré de Fanny c'est le crabe"
2) Remplacez le contenu des li par vos aliments préférés

### 3. Créer, attacher et effacer un élément
1) Dans la div id "point3", ajoutez un titre h2 contenant "3. Créer, attacher et effacer un élément"
2)  - Dans la div id "point3", ajoutez un ul qui contient 8 li avec comme contenu vos fims préférés
    - Effacez le film que vous aimez le moins
3) En dessous de la div précédente, à l'aide d'une boucle, ajoutez un titre pour chaque gros point de matière vue en DOM (récupération d'évènement, modifier un élément, créer et effacer un élément, get et setAttribute, eventListeners, event et event.target)

### 4. get et setAttribute
1) Récupérez l'img stockée dans la div id "point4" et ajoutez à cette image la classe "surprise" avec setAttribute
2) Appliquez sur la balise strong l'id colorRed du CSS
3) Récupérez la valeur de l'attribut class du premier p de ce document

### 5. eventListener
1) A partir de la div id "point3", récupérez la div id "point5". Appliquez sur le premier bouton un event listener qui au click lance une alert avec le contenu du premier titre h1 récupéré via DOM.
2) Chaque fois que vous cliquez sur le bouton "Click me 2", le p juste en dessous de ce bouton perd et regagne la classe "d-white".
3) Pour chaque li de l'ul ".item-list", faites un console log du li sur lequel vous avez cliqué.
4)  ["red", "green", "blue", "yellow"]
    Récupérez l'ul "#couleurs# à partir du titre "Modifier le contenu d'un élément"
    Assignez à chacun de ses li une couleur random contenue dans le tableau ci-dessus

### 6. e.target
1) Mettez un event listener click sur chacun des p de la div #point6. Si le contenu du p est click 1, mettez sur le p une bordure rouge, si le contenu est click 2, mettez le bg du p en jaune, si le contenu est click 3, mettez la color en vert, si le contenu est click 4, mettez un underline
2) Générez 5 boutons numérotés dans la div #numeros. Au click de chacun des boutons, une alert doit apparaitre avec le contenu du bouton.