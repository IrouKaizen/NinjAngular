/*
Paramètres optionnels et valeurs par défaut
JS a la particularité de permettre aux développeurs d’appeler une fonction avec un nombre
d’arguments variable :

• si tu passes plus d’arguments que déclarés par la fonction, les arguments supplémentaires sont
tout simplement ignorés (pour être tout à fait exact, tu peux quand même les utiliser dans la
fonction avec la variable spéciale arguments).
• si tu passes moins d’arguments que déclarés par la fonction, les paramètres manquants auront
la valeur undefined.

Ce dernier cas est celui qui nous intéresse. Souvent, on passe moins d’arguments quand les
paramètres sont optionnels, comme dans l’exemple suivant :
*/

function getPonies(size, page){
    size = size || 10;
    page = page || 1;

    server.get(size, page);
}

/*
Les paramètres optionnels ont la plupart du temps une valeur par défaut. L’opérateur OR (||) va
retourner l’opérande de droite si celui de gauche est undefined, comme cela serait le cas si le
paramètre n’avait pas été fourni par l’appelant (pour être précis, si l’opérande de gauche est falsy,
c’est-à-dire undefined, 0, false, "", etc.). Avec cette astuce, la fonction getPonies peut ainsi être
invoquée :
*/

getPonies(20, 2);
getPonies(); // getPonies(10, 1)
getPonies(15); // getPonies(15, 1)

/*
Cela fonctionnait, mais ce n’était pas évident de savoir que les paramètres étaient optionnels, sauf à
lire le corps de la fonction. ES2015 offre désormais une façon plus formelle de déclarer des
paramètres optionnels, dès la déclaration de la fonction :
*/

function getPonies(size = 10, page =1){

    server.get(size, page);
} //Maintenant il est limpide que la valeur par défaut de size sera 10 et celle de page sera 1 s’ils ne sont pas fournis

/*
La valeur par défaut peut être aussi un appel de fonction
*/

function getPonies(size = defaultSize(), page=1){
    //le fonction defaultSize sera appelée ici si ize is not provided
    server.get(size, page);
}

//////////////// REST OPERATOR //////////////////////

/*
Il y a une nouvelle syntaxe pour déclarer un nombre variable de parametres dans une fonction.
Comme on le disait, on peut passser des arg supp à un appel de fonctoon et y accéder avec la var speciale arg
*/

function addPonies(ponies){
    for(var i=0; i<arguments.length; i++){
        poniesInRace.push(arguments[i]);
    }
}
addPonies('Rainbow Dash', 'Pinkie pie');

/*
Mais tu seras d’accord pour dire que ce n’est ni élégant, ni évident : le paramètre ponies n’est jamais
utilisé, et rien n’indique que l’on peut fournir plusieurs poneys.
Utilisons une syntaxe bien meilleure, grâce au rest operator … ("opérateur de reste").
*/

function addPonies(...ponies){
    for(let pony of ponies){
        poniesInRace.push(pony);
    }
}

/*
ponies est désormais un véritable tableau, sur lequel on peut itérer. La boucle for … of utilisée
pour l’itération est aussi une nouveauté d’ES2015. Elle permet d’être sûr de n’itérer que sur les
valeurs de la collection, et non pas sur ses propriétés comme for … in.
*/

//////////////////////////////////////////////////////////////////////

/*
Le rest operator ne doit pas être confondu avec le spread operator ("opérateur d’étalement"), même
si, on te l’accorde, ils se ressemblent dangereusement ! Le spread operator est son opposé : il prend
un tableau, et l’étale en arguments variables. Le seul cas d’utilisation qui me vient à l’esprit serait
pour les fonctions comme min ou max, qui peuvent recevoir des arguments variables, et que tu
voudrais appeler avec un tableau :
*/

const ponyPrices = [12, 3, 4];
const minPrice = Math.min(...ponyPrices);
