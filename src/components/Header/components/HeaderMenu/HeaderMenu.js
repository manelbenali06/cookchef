import styles from './HeaderMenu.module.scss';

function HeaderMenu({ setPage }) {
    return (
        <ul className={`${ styles.MenuContainer } card p-20`}>
            <li onClick = {() => setPage("admin")}>Ajouter une recette</li>{/* on ecoute avec le onClick et on declare une fonction qui va appeler le setPage avec admin*/}
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    );
}

export default HeaderMenu;