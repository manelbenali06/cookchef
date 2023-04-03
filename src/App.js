import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Admin from "./pages/Admin/Admin";
import styles from "./App.module.scss";
import { useState } from "react";
//import { seedRecipes } from "./data/seed";

//seedRecipes(); //je l'invoque au lancement de l'application et je le commente avec son import
//simulation de rooter

function App() {
  const [page, setPage] = useState('homepage');
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      { page === 'homepage' &&  <Homepage />}
      { page === 'admin' &&  <Admin/> }
     
      <Footer />
    </div>
  );
}

export default App;
