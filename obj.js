//Raccourcis pour la création d’objets

/*
Il y a un nouveau raccourci pour créer des objets, quand la propriété
de l’objet que tu veux créer a le même nom que la variable utilisée comme valeur pour l’attribut.
*/

function laptop(){
    const color = 'gris';
    const name = 'michelle';
    return {color: color, name: name};
}

//Peut être raccourcis à
function laptop(){
    const color = 'gris';
    const name = 'michelle';
    return {color, name};
}

//Aussi :
function laptop(){
    return {
        run: ()=>{
            console.log("Run !")
        }
    };
}

//Peut être raccourcis à :
function laptop(){
    return {
        run(){
            console.log("Run !")
        }
    };
}