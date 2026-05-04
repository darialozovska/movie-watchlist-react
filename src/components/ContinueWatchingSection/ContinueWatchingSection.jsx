import ContinueWatchingCard from "../ContinueWatchingCard/ContinueWatchingCard";
import continueWatching from "../../data/continueWatching";
import styles from "./ContinueWatchingSection.module.css"

const ContinueWatchingSection = ({ favourites, toggleFavourite}) => {

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Continue watching</h3>
            <div className={styles.box}>
                <ul className={styles.list}>
                    {continueWatching.map((movie) => (
                        <ContinueWatchingCard
                            key={movie.id}
                            img={movie.img}
                            isFavourite={favourites.includes(movie.id)}
                            onToggleFavourite={() => toggleFavourite(movie.id)}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ContinueWatchingSection;