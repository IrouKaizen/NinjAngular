/*La paratique de var est délicate
Dès qu'on déclare une variable sur une ligne, elle existe déjà
Mais en js, il y a un concept nommé hoisting (remontée) qui déclare
la variable au début de la fonction même si tu l'as écrite plus loin.
Ainsi, déclarer une variable name dans le bloc if s'illustre de cette façon :*/

function getPonyFullName(pony){
  if(pony.isChampion){
    var name = 'Champion' + pony.name;
    return name;
  }
  return pony.name;
}

/*est équivalent à */

function getPonyFullName(pony){
  var name;
  if(pony.name){
    name = 'Champion' + pony.name;
    return name;
  }
  return pony.name;
}

//Introduction d'un nouveau mot-clé pour la déclaration de variable lt

function getPonyFullName(pony){
  if(pony.isChampion){
    let name = 'Champion' + pony.name;
    return name;
  }
  return pony.name;
}

/*L'accès à la variable name est maintenant restreinte à son bloc.
let remplace définitivement var à long terme */

/*
  const est utilisé pour déclarer des constantes.
  Une fois déclarée, elle doit obligatoirement être initialisée
  Et on ne pourra plus lui affecter de nouvelle valeur par la suite.

  Comme pour les variables déclarées avec let, les constantes ne sont pas hoisted ("remontées") et
  sont bien déclarées dans leur bloc.

  Il y a un détail qui peut cependant surprendre le profane. Tu peux initialiser une constante avec un
  objet et modifier par la suite le contenu de l’objet.
 */

  const PONY = {};
  PONY.color = 'blue';

//Mais on ne peut pas assigner à la constante un nouvel objet

const PONY = {};
PONY = {color: 'blue'}; //synError

//Même chose avec les tableaux

const PONIES = [];
PONIES.push({color: 'blue'}); //works
PONIES.push = [];//synError