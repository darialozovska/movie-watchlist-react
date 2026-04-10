import styles from "./Navigation.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";
import img from "../../assets/images/avatar.png";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>Movies</li>
                    <li className={styles.navListItem}>Series</li>
                    <li className={styles.navListItem}>Documentaries</li>
                </ul>
                <ul className={styles.navList2}>
                    <li className={styles.navListItem}>
                        <svg className={styles.icon} width="24" height="24">
                            <use href={`${sprite}#icon-search`}></use>
                        </svg>
                    </li>
                    <li className={styles.navListItem}>
                        <svg className={styles.icon} width="24" height="24">
                            <use href={`${sprite}#icon-bell`}></use>
                        </svg>
                    </li>
                    <li className={styles.navListItem}>
                        <img className={styles.img} src={img} />
                        <p className={styles.name}>name</p>
                    </li>
                </ul>
                </nav>
    )
}

export default Navigation;