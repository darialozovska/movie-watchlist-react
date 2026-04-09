import sprite from "../../assets/icons/symbol-defs.svg";
import styles from "./ContinueWatchingCard.module.css";

const ContinueWatchingCard = ({ img, isFavourite, onToggleFavourite }) => {

    return (
        <li className={styles.item}>
            <button
                type="button"
                onClick={onToggleFavourite}
                className={styles.btn}>
                <svg className={styles.icon} width="24" height="24">
                    <use href={isFavourite ? `${sprite}#icon-heart-2` : `${sprite}#icon-heart-1`} />
                </svg>
            </button>
            <img className={styles.img} src={img} />
        </li>
    )
}

export default ContinueWatchingCard;