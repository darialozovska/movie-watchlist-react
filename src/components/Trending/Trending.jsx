import MovieCard from "../MovieCard/MovieCard";
import styles from "./Trending.module.css";

const Trending = ({ movies, selectedMovieId, onSelectMovie, favourites, toggleFavourite }) => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Trending at this moment</h3>

            <ul className={styles.list}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        info={`${movie.year} | ${movie.genre}`}
                        img={movie.img}
                        isFavourite={favourites.includes(movie.id)}
                        onToggleFavourite={() => toggleFavourite(movie.id)}
                        onSelect={() => onSelectMovie(movie.id)}
                        isSelected={selectedMovieId === movie.id}
                        variant="trending"
                    />
                ))}
            </ul>
        </section>
    );
};

export default Trending;