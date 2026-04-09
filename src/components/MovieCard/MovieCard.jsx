import styles from "./MovieCard.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";

const MovieCard = ({ title, info, img, isFavourite, onToggleFavourite }) => {
    return (
        <li className={styles.item}>
            <button
                type="button"
                onClick={onToggleFavourite}
                className={styles.fav}
            >
                <svg className={styles.favIcon} width="24" height="24">
                    <use href={isFavourite ? `${sprite}#icon-heart-2` : `${sprite}#icon-heart-1`} />
                </svg>
            </button>
            <img className={styles.poster} src={img}/>
            <div className={styles.box}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.info}>{info}</p>
            </div>
        </li>
    )
}

export default MovieCard;