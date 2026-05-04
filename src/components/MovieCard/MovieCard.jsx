import styles from "./MovieCard.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";

const MovieCard = ({ title, info, img, isFavourite, onToggleFavourite, onSelect, isSelected, variant }) => {
    return (
        <li className={`${styles.item} ${variant === "favourite" ? styles.favouriteItem : ""} ${isSelected ? styles.selected : ""}`} 
            onClick={onSelect}
        >
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onToggleFavourite();
                }
                }
                className={`${styles.fav} ${variant === "favourite" ? styles.favouriteFav : ""}`}
            >
                <svg className={styles.favIcon} width="24" height="24">
                    <use href={isFavourite ? `${sprite}#icon-heart-2` : `${sprite}#icon-heart-1`} />
                </svg>
            </button>
            <img className={`${styles.poster} ${variant === "favourite" ? styles.favouritePoster : ""}`} src={img}/>
            <div className={`${styles.box} ${variant === "favourite" ? styles.favouriteBox : ""}`}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.info}>{info}</p>
            </div>
        </li>
    )
}

export default MovieCard;