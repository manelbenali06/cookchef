import { useEffect } from "react";
import { useState } from "react";

export function useFetchData(url, page){
    const [data, setData] = useState([]);//conserver la liste des recettes
    const [isLoading, setIsLoading] = useState("true");//charger les articles
    const [error, setError] = useState([]);

    useEffect(() => {
        let cancel = false;
        async function fetchData() {//déclarer notre methode
          try {
                setIsLoading(true);
                const queryParam =new URLSearchParams();
                if(page) { // retrouver tout ça dans ApiRest
                    queryParam.append('skip',(page - 1) * 18 );
                    queryParam.append('limit', 18);
                    queryParam.append('sort', 'createdAt:-1');
                }

            const response = await fetch(url + `?${queryParam}`);   //on réccupère notre réponse
    
            if (response.ok && !cancel) {//si response est ok et que response est bien égal a false  on appel setRecipes
              const newData = await response.json();//on réccuper la données depuis recipes
              setData((x) =>
                 Array.isArray(newData)
                  ? [...x, ...newData]
                  : [...x, newData]
                );//si on a bien a faire a un tableau
            }
          } catch (e) {
            console.log("ERREUR");
            setError('Erreur');
          } finally {
            if (!cancel) {  //sinon on fait rien dutout
              setIsLoading(false);
            }
          }
        }
        fetchData();   //le fetch va s'executer au moment de chargement de la page
        return () => (cancel = true);   //cet effet à été annuler et ducoup j'ai pas envie de reccuperer les infos
      }, [url, page]);
    return [[data, setData], isLoading, error];
}