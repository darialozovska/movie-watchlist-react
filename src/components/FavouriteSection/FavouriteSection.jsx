import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies";
import styles from "./FavouriteSection.module.css"
import Navigation from "../Navigation/Navigation";
import ContinueWatchingCard from "../ContinueWatchingCard/ContinueWatchingCard";
import continueWatching from "../../data/continueWatching";

const FavouriteSection = ({ favourites, toggleFavourite }) => {
    const favouriteMovies = movies.filter((movie) => favourites.includes(movie.id));

    const favouriteContinue = continueWatching.filter((movie) => favourites.includes(movie.id));

    return (
        <>
        <Navigation />
        <section className={styles.section}>
            <h3 className={styles.title}>Favourites</h3>

            {favouriteMovies.length === 0 && favouriteContinue.length === 0 && (
                <p className={styles.info}>No favourites yet.</p>
                )}
                
            {favouriteMovies.length > 0 && (
                <>
                    <h4 className={styles.subTitle}>Movies</h4>
                    <ul className={styles.list}>
                        {favouriteMovies.map((movie) => (
                            <MovieCard
                                key={`movie-${movie.id}`}
                                title={movie.title}
                                info={movie.info}
                                img={movie.img}
                                isFavourite={true}
                                onToggleFavourite={() => toggleFavourite(movie.id)}
                                variant="favourite"
                            />
                        ))}
                    </ul>
                </>
            )}

            {favouriteContinue.length > 0 && (
                <>
                    <h4 className={styles.subTitle}>Continue watching</h4>
                    <ul className={styles.list}>
                        {favouriteContinue.map((movie) => (
                            <ContinueWatchingCard
                                key={`continue-${movie.id}`}
                                img={movie.img}
                                isFavourite={true}
                                onToggleFavourite={() => toggleFavourite(movie.id)}
                            />
                        ))}
                    </ul>
                </>
            )}
        </section>
        </>
    )
}

export default FavouriteSection;