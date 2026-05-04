import MovieCard from "../MovieCard/MovieCard"
import movies from "../../data/movies"
import styles from "./MovieSection.module.css";

const MovieSection = ({ favourites, toggleFavourite}) => {
    return (
        <section className={styles.section}>
                <h3 className={styles.title}>Trending</h3>
                <div className={styles.boxList}>
                    <ul className={styles.list}>
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                img={movie.img}
                                title={movie.title}
                                info={movie.info}
                                isFavourite={favourites.includes(movie.id)}
                                onToggleFavourite={() => toggleFavourite(movie.id)}
                            />
                        ))}
                    </ul>
                </div>
            </section>
    )
}

export default MovieSection;