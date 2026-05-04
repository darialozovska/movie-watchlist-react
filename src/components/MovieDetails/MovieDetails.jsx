import styles from "./MovieDetails.module.css";
import sprite from "../../assets/icons/symbol-defs.svg"

const MovieDetails = ({ movie, favourites, toggleFavourite }) => {
    if (!movie) {
        return null;
    }

    const isFavourite = favourites.includes(movie.id);

    return (
        <section className={styles.section}>
            <div className={styles.boxImg}>
                <img src={movie.img} alt={movie.title} className={styles.img} />
            </div>

            <div className={styles.boxInfo}>
                <h2 className={styles.title}>{movie.title}</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>{movie.year}</li>
                    <li className={styles.item}>{movie.genre}</li>
                    <li className={styles.item}>{movie.time}</li>
                </ul>

                <p className={styles.info}>{movie.info}</p>

                <div className={styles.actions}>
                    <button type="button" className={styles.watchBtn}>Watch now</button>

                    <button
                        type="button"
                        className={styles.favBtn}
                        onClick={() => toggleFavourite(movie.id)}
                    >
                        <svg className={styles.favIcon} width="24" height="24">
                            <use
                                href={
                                    isFavourite
                                        ? `${sprite}#icon-heart-2`
                                        : `${sprite}#icon-heart-1`
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;