import styles from "./HeroSection.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";
import { useState } from "react";

const HeroSection = () => {
    const [isFavourite, setIsFavourite] = useState(false);


    return (
        <section className={styles.hero}>
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
                        <img className={styles.img} />
                        <p className={styles.name}>name</p>
                    </li>
                </ul>
                </nav>
                <div className={styles.content}>
                    <h2 className={styles.title}>Insider</h2>
                    <p className={styles.text}>2022 | Comedy horror | 1 Season</p>
                    <div className={styles.actions}>
                        <button type="button" className={styles.watchBtn}>Watch now</button>
                    <button
                        type="button"
                        className={styles.favBtn}
                        onClick={() => setIsFavourite(!isFavourite)}>
                        <svg className={styles.favIcon} width="24" height="24">
                            <use href={
                                isFavourite
                                ? `${sprite}#icon-heart-2`
                                : `${sprite}#icon-heart-1`
                            }></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
    )
}

export default HeroSection;