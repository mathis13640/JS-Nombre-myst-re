// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.
//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés


// La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux 
// termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses 
// premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, etc...
// Code un algorithme qui calcul les 50 premiers termes de la suite.

//demander au user d'entrer un nombre
let choixUtilisateur = prompt ("choisissez un nombre entre 0 et 100")
//afficher console
console.log(choixUtilisateur);
//random 1 à 100
let choixOrdi = Math.floor(Math.random() * 100)
//afficher console
console.log(choixOrdi);

//si égale chiffre mystère (bien joué)
if(choixUtilisateur===choixOrdi){
    console.log(choixUtilisateur===choixOrdi("vous avez trouvez le bon chiffre"));
}

//Si supérieur au chiffre mystère (afficher plus petit)

//Si inférieur au chiffre mystère (afficher plus grand)