import {burgerList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)
const container = document.querySelector('#burger-container')

// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

burgerList.forEach(burger =>{
    container.innerHTML += `<div class="flex-col border-2 rounded border-slate-900 p-4 my-6"><img class="rounded" src="${burger.img}" /><div class="flex justify-between"><p class="text-2xl">${burger.nom}</p><p class="text-2xl"><b>${burger.prix}€</b></p></div><p>${burger.description}</p></div>`
})

// Etape 1
// Pour chacun des burgers affiche le nom dans la console

// Etape 2
// Dans #burger-container afficher le nom des burgers

// Etape 3 
// Ajouter la description et le prix 

// Etape 4 
// Afficher l'image du burger

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients