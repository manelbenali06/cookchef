import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useState } from "react";
import { useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Search from "./components/Search/Search";
import { useFetchData } from "../../hooks/useFetchData";

function Homepage() {
 
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const BASE_URL_API = useContext(ApiContext);
  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

  function updateRecipe(_id){
    setRecipes(
      recipes.map((r) => (r._id ===  updateRecipe._id ? updateRecipe : r))
    );
  }

  function deleteRecipe(_id){
    setRecipes(recipes.filter((r) => r._id !== _id))
  }
  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes <small className={  styles.small }>-{ recipes.length }</small></h1>
      <div
        className={`card flex-fill  d-flex flex-column p-20 mb-20 ${styles.contentCard}`}
      >

        <Search setFilter={ setFilter }/>
      
        {isLoading && !recipes.length ? (  //si c'est en chargement
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe
                 key={r._id} 
                 recipe={r} 
                 deleteRecipe={ deleteRecipe }
                 toggleLikedRecipe={ updateRecipe } 
                 />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
            <button onClick= { () => setPage(page +1)} 
            className="btn btn-primary">Charger plus de recettes</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
