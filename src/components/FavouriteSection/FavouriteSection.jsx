import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies";
import styles from "./FavouriteSection.module.css"
import Navigation from "../Navigation/Navigation";

const FavouriteSection = ({ favourites, toggleFavourite }) => {
    const favouriteMovies = movies.filter((movie) => favourites.includes(movie.id));

    return (
        <>
            <Navigation />
        <section className={styles.section}>
            <h3 className={styles.title}>Favourites</h3>

            {favouriteMovies.length === 0 ? (
                <p className={styles.info}>No favourites yet.</p>
            ) : (
                    <ul className={styles.list}>
                        {
                        favouriteMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            info={movie.info}
                            img={movie.img}
                            isFavourite={true}
                            onToggleFavourite={() => toggleFavourite(movie.id)}
            />
                    ))}
                </ul>
            )}
        </section>
        </>
    )
}

export default FavouriteSection;