import {data} from './recipes';// data c'est mon dossier de recettes

export async function seedRecipes() {
    await fetch('https://restapi.fr/api/recipes', {//envoyer des données sur le serveur
        method: 'POST',//création de données
        headers: {
            'Content-Type':'application/json'//on envoie du json
        },
        body: JSON.stringify(data)//on passe l'ensemble de nos articles en stringify pour quil soit compris par notre serveur
    });
}